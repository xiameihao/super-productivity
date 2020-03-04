import {GlobalConfigState} from './global-config.model';

const minute = 60 * 1000;
export const DEFAULT_GLOBAL_CONFIG: GlobalConfigState = {
  lang: {
    lng: null
  },
  misc: {
    isDarkMode: false,
    isConfirmBeforeExit: false,
    isNotifyWhenTimeEstimateExceeded: false,
    isAutMarkParentAsDone: false,
    isAutoStartNextTask: true,
    isDisableRemindWhenForgotToFinishDay: false,
    isTurnOffMarkdown: false,
  },
  evaluation: {
    isHideEvaluationSheet: false,
    isHideMetricFromMenu: false,
  },
  idle: {
    isOnlyOpenIdleWhenCurrentTask: false,
    isEnableIdleTimeTracking: true,
    minIdleTime: 5 * minute,
    isUnTrackedIdleResetsBreakTimer: true,
  },
  takeABreak: {
    isTakeABreakEnabled: false,
    isLockScreen: false,
    isFocusWindow: false,
    /* tslint:disable-next-line */
    takeABreakMessage: 'Take a break! You have been working for ${duration} without one. Go away from the computer! Take a short walk! Makes you more productive in the long run!',
    takeABreakMinWorkingTime: 60 * minute,
  },
  pomodoro: {
    isEnabled: false,
    duration: 25 * minute,
    breakDuration: 5 * minute,
    longerBreakDuration: 15 * minute,
    cyclesBeforeLongerBreak: 4,
    isStopTrackingOnBreak: true,
    isStopTrackingOnLongBreak: true,
    isManualContinue: false,
    isPlaySound: true,
    isPlaySoundAfterBreak: false,
    // isGoToWorkView: false,
    isPlayTick: false,
  },
  keyboard: {
    globalShowHide: 'Ctrl+Shift+X',
    globalToggleTaskStart: null,
    globalAddNote: null,
    globalAddTask: null,
    addNewTask: 'Shift+A',
    addNewNote: 'n',
    openProjectNotes: 'Shift+N',
    openDistractionPanel: 'Shift+D',
    showHelp: '?',
    toggleBookmarks: 'Shift+V',
    toggleBacklog: 'b',
    goToWorkView: 'w',
    goToDailyAgenda: null,
    goToFocusMode: 'Shift+F',
    goToSettings: null,
    zoomIn: 'Ctrl++',
    zoomOut: 'Ctrl+-',
    zoomDefault: 'Ctrl+0',
    taskEditTitle: 'e',
    taskToggleAdditionalInfoOpen: 'i',
    taskOpenEstimationDialog: 't',
    taskSchedule: 's',
    taskToggleDone: 'd',
    taskAddSubTask: 'a',
    taskDelete: 'Delete',
    selectPreviousTask: 'k',
    selectNextTask: 'j',
    moveTaskUp: 'Ctrl+Shift+ArrowUp',
    moveTaskDown: 'Ctrl+Shift+ArrowDown',
    moveToBacklog: 'Shift+B',
    moveToTodaysTasks: 'Shift+T',
    expandSubTasks: null,
    collapseSubTasks: null,
    togglePlay: 'y',
  },
  googleDriveSync: {
    isEnabled: false,
    isAutoLogin: false,
    isAutoSyncToRemote: false,
    isNotifyOnSync: false,
    isLoadRemoteDataOnStartup: false,
    isCompressData: true,
    syncInterval: minute,
    syncFileName: 'SUPER_PRODUCTIVITY_SYNC.json',
    _lastSync: null,
    _backupDocId: null,
  },
  localBackup: {
    isEnabled: true,
  },
  _googleSession: {
    accessToken: null,
    refreshToken: null,
    expiresAt: null
  },
};
