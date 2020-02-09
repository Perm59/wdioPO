
const HOST = 'https://stage.pasv.us';
const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;
const URL_DAY_REPORT = `${HOST}/diary/create`;
const URL_DAILY_REPORTS = `${HOST}/diary`;
const URL_FLASH_CARDS = `${HOST}/flash`;

const progressMonitorLinks = {
  courses: 'Courses',
  cards: 'Cards',
  groups: 'Groups',
  quiz: 'Quiz',
  challenge: 'Challenge',
  diary: 'Diary',
  users: 'Users',
  admin: 'Admin',
};

const progressMonitorLinksSelectors = {
  courses: 'a[qa="courses-link"]',
  cards:  '//div[@id="site-menu"]//a[@qa="cards-link"]',    //'a[qa="cards-link"]',
  groups: 'a[qa="groups-link"]',
  quiz: 'a[qa="quiz-link"]',
  challenge: '//a[contains(text(),"Challenge")]',
  admin: 'a[qa="admin-link"]',
};

const user = {
  firstName: 'Den',
  lastName: 'Morgan',
  phone: '12345678981',
  password: 'dG12ljfuk',
  email: Math.random() + 'kakao@yahoo.com',
  about: 'Some info about',
  goals: 'My goals: 1. Eat 2. Sleep 3. Code',
  englishLevel: 'Native',
};


const pageRegister = {
  title: 'Progress Monitor',
  h1: 'User Register',
  description: 'Profiles with fictitious or dummy data will be deleted.',
  button: 'Submit',
};

const pageLogin = {
  title: 'Progress Monitor',
  h1: 'User Login',
  notification: 'User created successfully. Please check your email and verify it',
  button: 'Login',
};

const pageConfirmation = {
  confirmation: 'You are a new user',
  notification: 'Auth success',
};

const logoutSelectors = {
  logoutDropdownLink: '//a[@class="dropdown-toggle nav-link"]',
  logoutDropdownButton: '//button[contains(text(),"Logout")]',
};

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

const pageCourse = {
  h1: 'Courses',
  notification: 'All courses',
};

const pageCourseCreate = {
  h1: 'Create Course',
  createButton: 'Create',
  courseName: 'New course QA Automation',
  courseDescription: 'This course created for manual testers.',
  accessTypeMembers: 'Members',
  accessTypeAll: 'All',
};

const pageFlashCards = {
  h1: 'FlashCards',
  createNewFlashGroupButton: 'Create new FlashGroup',
  edit: 'Edit',
  notification: 'Get all Flash cards groups',
};

const pageFlashCardsModalCreate = {
  h5: 'Create Flash Group',
  createButton: 'Create',
  createGroupName: 'QA Automation',
  createGroupDescription: 'These group about Automation',
  editButton: 'Edit',
  editGroupNameInput: 'QA Automation1111111',
};



const pageFlashGroup = {
  groupNameCreated: 'QA Automation',
};

const pageGroups = {
  h1: 'Groups',
  createNewGroupButton: 'Create new Group',
  notification: 'Group created',
};

const pageCreateNewGroup = {
  h1: 'Create new Group',
  createButton: 'Create',
  groupName: 'QA35',
  accessType: 'All',
  groupDescription: 'This group is for the best QA engineers',
};

const pageQuiz = {
  h1: 'Quiz',
  createQuestionGroupButton: 'Create Question Group',
  notification: 'Question Group created',
};

const pageCreateQuestionGroup = {
  h1: 'Create Question Group',
  saveButton: 'Save',
  groupName: 'QuizGroup1',
  groupDescription: 'About QuizGroup1',
  acceptableMistakes: 1,
};

const pageEditQuizQuestionGroup = {
  h1: 'Edit QuizGroup1 0',
  notification: 'Question Group created',
  saveButton: 'Save',
  addVariantButton: 'Add Variant',
  createButton: 'Create',
};

const pageChallenge = {
  h1: 'Challenge',
  createChallengeButton: 'Create Challenge',
};

const pageChallengeModal = {
  h5: 'Create Challenge',
  saveButton: 'Save',
  validateSolutionButton: 'Validate solution',
  challengeName: 'Challenge1',
  programmingLanguage: 'JavaScript',
  level: 'Medium',
  shortDescription: 'Create a variable `a`',
  instruction: 'First, you need to do this...',
  completedSolution: 'const a;',
  openTest: '2',
  hiddenTest: '3',
  initialSolution: 'const a;',
};

const pageAdmin = {
  h1: 'Admin',
  UpdateCWButton: 'Update CW',
  notification: 'Updated Codewars 0 from 0',
};
// Selectors///////////////////////////////
const pageRegisterSelectors = {
  h1: 'h1',
  description: 'p',
  submitButton: 'form button[type="submit"]',
  firstNameInput: 'form input[name="firstName"]',
  lastNameInput: 'form input[name="lastName"]',
  phoneInput: 'form input[name="phone"]',
  emailInput: 'form input[name="email"]',
  passwordInput: 'form input[name="password"]',
  aboutInput: 'form textarea[name="about"]',
  goalsInput: 'form textarea[name="goals"]',
  englishLevelInput: 'form select[name="englishLevel"]',
};

const pageLoginSelectors = {
  h1: 'h1',
  notification: 'h4*=User',
  loginButton: 'form button[type="submit"]',
  linkToForget: '=Forgot password?',
  emailInput: 'form input[name="email"]',
  passwordInput: 'form input[name="password"]',
};

const pageConfirmationSelectors = {
  h1: 'h1',
  notification: 'h4*=Auth',
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

const pageCourseSelectors = {
  h1: 'h1',
  createNewCourseButton: '//a[@class="btn btn-primary"]',
  notification: 'h4*=All courses',
};

const pageCourseCreateSelectors = {
  h1: '//span[@class="h1 mr-4"]',
  createButton: 'button[type="submit"]',
  courseNameInput: '//input[@name="name"]',
  courseDescriptionInput: '//input[@name="description"]',
  accessTypeInput: '//select[contains(@name,"accessType")]',
};

const pageFlashCardsSelectors = {
  h1: 'h1',
  createNewFlashGroupButton: '//button[@qa="flash-create-new-group"]',
  saveEditFlashGroupButton: '//button[@class="btn btn-primary"]',
  edit: '//body//div[@class="col"]//div//div[2]//div[1]//div[1]//button[1]',
  notification: 'h4*=Get all',
};

const pageFlashCardsModalSelectors = {
  modalSidePanel: '//div[contains(@class, "sidepanel")]',
  modalSidePanelTitle: '//div[contains(@class, "sidepanel")]//*[@class="modal-title"]',
  createButton: '//button[contains(@class,"btn btn-primary")]',
  createGroupNameInput: '//input[contains(@name,"name")]',
  createGroupDescriptionInput: '//input[contains(@name,"description")]',
  firstItemInListGroupNameCreatedInput: '//div[@qa="flash-group-list "]//h4/a',
  firstItemInListGroupDescriptionCreatedInput: '//div[@qa="flash-group-list "]//div[@qa="description"]',
  editButton: '//button[@class="btn btn-primary"]',
  editGroupNameInput: '//input[@name="name"]',
  editGroupDescriptionInput: '//input[@name="description"]',
};

const pageFlashGroupSelectors = {
  groupNameCreated: '//h1',
};

const pageGroupsSelectors = {
  h1: '//h1[contains(text(),"Groups")]',
  createNewGroupButton: '//a[@class="btn btn-secondary"]',
  notification: '//h4[@class="notification-title"]',
};

const pageCreateNewGroupSelectors = {
  h1: 'h1',
  createButton: '//button[@class="btn btn-primary"]',
  groupNameInput: '//input[@name="name"]',
  accessTypeInput: '//select[@name="accessType"]',
  groupDescriptionInput: '//input[@name="description"]',
};

const pageQuizSelectors = {
  h1: 'h1',
  createQuestionGroupButton: '//button[@class="btn btn-primary"]',
  notification: '//h4[@class="notification-title"]',
};

const pageCreateQuestionGroupSelectors = {
  h1: '//h1[contains(text(),"Create Question Group")]',
  saveButton: '//button[@class="btn btn-primary"]',
  groupNameInput: '//input[@placeholder="Group name"]',
  groupDescriptionInput: '//input[@placeholder="Group description"]',
  acceptableMistakesInput: '//input[@placeholder="Acceptable mistakes"]',
  checkboxActiveInputLabel: '//label[@class="custom-control-label"]',
  checkboxActiveInput: '//input[@id="Active"]',
};

const pageEditQuizQuestionGroupSelectors = {
  h1: 'h1*=Edit',   //'//h1[contains(text(),"Edit")]',
  notification: '//h4[@class="notification-title"]',
  saveButton: '//button[@class="btn btn-primary"]',
};

const pageChallengeSelectors = {
  h1: '//h1[contains(text(),"Challenge")]',
  //h1: '/html[1]/body[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/h1[1]',
  //createChallengeButton: '//button[@class="btn btn-secondary"]',
  createChallengeButton: 'button[qa="create-challenge-button"]',
  searchChallengeInput: '//input[@id="searchChallenge"]',
};

const pageChallengeModalSelectors = {
  h5: '//h5[@class="modal-title"]',
  saveButton: 'button[type="submit"]',    //'//button[@class="mr-3 btn btn-primary"]',
  validateSolutionButton: '//button[contains(text(),"Validate solution")]',
  challengeNameInput: '//input[@name="name"]',
  programmingLanguageInput: '//select[@name="programmingLang"]', //'//option[contains(text(),'JavaScript')]',
  levelInput: '//select[@name="level"]',
  shortDescriptionInput: '//textarea[@name="description"]',
  instructionInput: '//textarea[@name="instruction"]',
  completedSolutionInput: '//div[@class="codeEditor completedSolution"]//textarea[@class="npm__react-simple-code-editor__textarea"]',
  openTestInput: '',
  hiddenTestInput: '',
  initialSolutionInput: '',
};

const pageAdminSelectors = {
  h1: 'h1', //'//h1[contains(text(),"Admin")]',
  updateCWButton: '//button[@class="btn btn-primary"]',
  notification: '//h4[@class="notification-title"]',
};

module.exports  = { HOST, URL_REGISTER, URL_LOGIN, URL_DAY_REPORT, URL_DAILY_REPORTS, URL_FLASH_CARDS,
  progressMonitorLinks, user, pageRegister, pageLogin, pageConfirmation, logoutSelectors,
  pageUserAbout, pageCreateDayReport, pageDiary, pageCourse, pageCourseCreate,
  pageFlashCards, pageFlashCardsModal: pageFlashCardsModalCreate, pageFlashGroup, pageGroups, pageCreateNewGroup, pageQuiz,
  pageCreateQuestionGroup, pageEditQuizQuestionGroup, pageChallenge,
  pageChallengeModal, pageAdmin, progressMonitorLinksSelectors, pageRegisterSelectors,
  pageLoginSelectors, pageConfirmationSelectors, pageUserAboutSelectors,
  pageCreateDayReportSelectors, pageDiarySelectors, pageCourseSelectors,
  pageCourseCreateSelectors, pageFlashCardsSelectors,pageFlashCardsModalSelectors,
  pageFlashGroupSelectors, pageGroupsSelectors, pageCreateNewGroupSelectors, pageQuizSelectors,
  pageCreateQuestionGroupSelectors, pageEditQuizQuestionGroupSelectors,
  pageChallengeSelectors, pageChallengeModalSelectors, pageAdminSelectors};
