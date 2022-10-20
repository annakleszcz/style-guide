// @flow strict

const iconMap = {
  Essential: [
    'academic_cap',
    'all_questions',
    'answer_bubble',
    'answer',
    'answers',
    'ask_bubble',
    'block',
    'bulb_checked',
    'bulb',
    'calendar',
    'chapter',
    'chapter',
    'clipboard',
    'counter',
    'credit_card',
    'cursor_select',
    'dot',
    'envelope',
    'exclamation_mark',
    'funnel',
    'globe',
    'hand_move',
    'info',
    'lock_with_play',
    'money_transfer',
    'multiselect_checked',
    'multiselect_unchecked',
    'padlock',
    'question',
    'recent_questions',
    'seen',
    'send',
    'settings',
    'shield',
    'sms',
    'spark',
    'textbook',
    'toughest_questions',
    'unseen',
    'warning',
    'gift',
  ],
  Social: [
    'ask_parent_to_pay',
    'bell_checked',
    'bell_outlined',
    'bookmark_outlined',
    'bookmark',
    'check',
    'comment_outlined',
    'comment',
    'crown_outlined',
    'crown',
    'cup',
    'friend_add',
    'friend_checked',
    'friend_pending',
    'friend_remove',
    'friends',
    'heart_outlined',
    'heart_outlined',
    'heart',
    'influence',
    'megaphone',
    'messages',
    'notifications',
    'points',
    'profile_settings',
    'profile_view',
    'profile',
    'report_flag_outlined',
    'report_flag',
    'share_on_ios',
    'share',
    'star_half_outlined',
    'star_half',
    'star_outlined',
    'star',
    'thumb_down_outlined',
    'thumb_down',
    'thumb_up_outlined',
    'thumb_up',
    'unbookmark',
    'user_block',
    'verified',
  ],
  'Editor and Media': [
    'arrow_top_right',
    'attachment',
    'backward_5s',
    'backward_end',
    'barcode_scanner',
    'bold',
    'bring_front',
    'bulleted_list',
    'camera',
    'circle_fill',
    'circle',
    'crop',
    'cyrillic',
    'dashed_line',
    'draw',
    'drawing_mode',
    'equation',
    'eraser',
    'european',
    'flashlight_off',
    'flashlight_on',
    'forward_5s',
    'greek',
    'heading',
    'hexagon',
    'highlight',
    'image',
    'italic',
    'keyboard',
    'line',
    'mic',
    'numbered_list',
    'pause',
    'pencil',
    'pi',
    'play',
    'quote',
    'rectangle',
    'replay',
    'rotate_90',
    'rotate',
    'send_back',
    'subtitle',
    'sup_sub',
    'symbols',
    'text',
    'time_speed',
    'title',
    'trash',
    'triangle',
    'underlined',
  ],
  Navigation: [
    'add_more',
    'arrow_double_right',
    'arrow_down',
    'arrow_left',
    'arrow_right',
    'arrow_up',
    'caret_down',
    'caret_up',
    'chevron_double_down',
    'chevron_double_right',
    'chevron_down',
    'chevron_left',
    'chevron_right',
    'chevron_up',
    'clear',
    'close',
    'collapse',
    'filters',
    'fullscreen',
    'less',
    'logout',
    'menu',
    'more',
    'open_in_new_tab',
    'options',
    'plus',
    'reload',
    'search',
  ],
  'Social Media': [
    'apple',
    'facebook',
    'google',
    'instagram',
    'linkedin',
    'medium',
    'twitter',
    'youtube',
  ],
};

const groups = Object.keys(iconMap);

export function getIconGroup(iconName: string): string {
  return groups.find(group => iconMap[group].includes(iconName)) || 'Misc';
}
