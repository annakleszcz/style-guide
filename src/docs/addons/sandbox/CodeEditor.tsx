import * as React from 'react';
import {
  autocompletion,
  completionKeymap,
  completeFromList,
} from '@codemirror/autocomplete';
import type {KeyBinding} from '@codemirror/view';
import ts from 'typescript';
import {
  createDefaultMapFromCDN,
  createSystem,
  createVirtualTypeScriptEnvironment,
  VirtualTypeScriptEnvironment,
} from '@typescript/vfs';
import lzstring from 'lz-string';
import {useActiveCode, SandpackCodeEditor} from '@codesandbox/sandpack-react';
// @ts-expect-error
import styleguideTypeDefinitions from '!!raw-loader!../../../../dist/sandbox-types/brainly-style-guide-sandbox.d.ts';
// @ts-expect-error
import reactTypes from '!!raw-loader!../../../../node_modules/@types/react/index.d.ts';

type CodeEditorPropsType = {
  code: string;
};

const {options: compilerOptions} = ts.convertCompilerOptionsFromJson(
  {jsx: 'rect'},
  ''
);

export const CodeEditor = ({code}: CodeEditorPropsType) => {
  const {code: editorCode} = useActiveCode();
  const [tsEnv, setTsEnv] = React.useState<VirtualTypeScriptEnvironment>();

  React.useEffect(() => {
    const setup = async () => {
      const fsMap = await createDefaultMapFromCDN(
        compilerOptions,
        ts.version,
        true,
        ts,
        lzstring
      );

      fsMap.set('/brainly-style-guide-sandbox.d.ts', styleguideTypeDefinitions);
      fsMap.set('/react.d.ts', reactTypes);
      fsMap.set('index.tsx', code);
      const system = createSystem(fsMap);
      const env = createVirtualTypeScriptEnvironment(
        system,
        ['index.tsx', '/brainly-style-guide-sandbox.d.ts', '/react.d.ts'],
        ts,
        compilerOptions
      );

      setTsEnv(env);
    };

    setup();
  }, [code]);
  React.useEffect(() => {
    if (tsEnv && editorCode) {
      tsEnv.updateFile('index.tsx', `${editorCode}`);
    }
  }, [tsEnv, editorCode]);
  const extensions = React.useMemo(
    () => [
      autocompletion({
        override: [
          context => {
            const {pos} = context;
            let completions;

            if (tsEnv) {
              completions = tsEnv.languageService.getCompletionsAtPosition(
                'index.tsx',
                pos,
                {}
              );
            }

            if (!completions) {
              return null;
            }

            return completeFromList(
              completions.entries.map(c => ({
                type: c.kind,
                label: c.name,
              }))
            )(context);
          },
        ],
      }),
    ],
    [tsEnv]
  );

  return (
    <SandpackCodeEditor
      style={{
        height: 600,
        backgroundColor: 'var(--gray-10)',
      }}
      extensions={extensions}
      extensionsKeymap={completionKeymap as KeyBinding[]}
    />
  );
};
