import Page from '../Page';


class ProfilePage extends Page {
  get h1 () {
    return $('h1');
  }

  get createDayReportButton () {
    return $('a[qa="create-day-report-button"]');
    }
}
export default new ProfilePage();