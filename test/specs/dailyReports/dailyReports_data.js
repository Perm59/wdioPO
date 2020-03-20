const HOST = 'https://stage.pasv.us';
const URL_DAILY_REPORTS = `${HOST}/diary`;
const URL_DAY_REPORT = `${HOST}/diary/create`;

const pageUserAbout = {
  createDayReportButton: 'Create day report',
};


const pageCreateDayReport = {
  h1: 'Create day report',
  yourMorale: '9',
  hoursStudy: '5',
  yourDay: 'So far so good and I like it so much!',
  saveButton: 'Save',
};

const pageDiary = {
  h1: 'Daily reports',
  notification: 'Get last (50) day reports',
  notificationApproved: 'Diary approved. Updated Achievement. Success',
  notificationILikeThis: 'Diary Like. Success',
  notificationDelete: 'Diary deleted',
};

const pageUserAboutSelectors = {
  createDayReportButton: 'a[qa="create-day-report-button"]',
};

const pageCreateDayReportSelectors = {
  h1: 'h1',
  yourMoraleInput: 'form select[name="morale"]',
  hoursStudyInput: 'form input[name="hours"]',
  yourDayInput: 'textarea[name="description"]',
  checkboxHelpedInput: 'form input[label="Helped classmates"]',
  checkboxIneedHelpInput: 'form input[label="I need help"]',
  checkboxWatchedLecturesInput: 'form input[label="Watched lectures"]',
  checkboxGotAJobOfferInput: 'form input[label="Got a job offer"]',
  saveButton: 'button[type="submit"]',
};

const pageDiarySelectors = {
  h1: 'h1',
  approveButton: 'button[qa="approve-button"]',
  approvedButton: 'span[qa="approved-mark"]',
  likeButton: 'button[qa="like-button"]',
  iLikeThisButton: 'button[qa="like-button"]',
  deleteButton: 'button[qa="delete-button"]',
  notification: '//h4[@class="notification-title"]',
  notificationApproved: 'h4*=Diary approved.',
  notificationILikeThis: 'h4*=Diary Like.',
  notificationDelete: 'h4*=Diary deleted',
};

//export default  dailyReports_data;  ????
//module.exports  = { HOST, URL_DAY_REPORT, URL_DAILY_REPORTS, pageUserAbout, pageDiary, pageCreateDayReport, pageUserAboutSelectors, pageCreateDayReportSelectors, pageDiarySelectors};