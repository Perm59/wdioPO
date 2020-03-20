import Page from '../Page';


class CreateDayReportPage  extends Page {
  get h1 () {
    return $('h1');
  }

  get yourMorale() {
    return $('form select[name="morale"]');
  }

  get hoursStudy () {
    return $('form input[name="hours"]');
  }

  get yourDay () {
    return $('textarea[name="description"]');
  }

  get checkboxHelped () {
    return $('form input[label="Helped classmates"]');
  }

  get checkboxIneedHelp () {
    return $('form input[label="I need help"]');
  }

  get checkboxWatchedLectures () {
    return $('form input[label="Watched lectures"]');
  }

  get checkboxGotAJobOffer () {
    return $('form input[label="Got a job offer"]');
  }

  get saveButton () {
    return $('button[type="submit"]');
  }


}
export default new CreateDayReportPage();

/*template
get  () {
  return $();
}

 */