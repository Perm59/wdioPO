import Page from '../Page';


class DailyReportsPage  extends Page {
  get h1() {
    return $('h1');
  }

  get approveButton () {
    return $('button[qa="approve-button"]');
  }

  get approvedButton () {
    return $('span[qa="approved-mark"]');
  }

  get likeButton () {
    return $('button[qa="like-button"]');
  }

  get iLikeThisButton () {
    return $('button[qa="like-button"]');
  }

  get deleteButton () {
    return $('button[qa="delete-button"]');
  }

  get notification () {
    return $('//h4[@class="notification-title"]');
  }

  get notificationApproved () {
    return $('//h4[@class="notification-title"]');
  }

  get notificationILikeThis () {
    return $('h4*=Diary Like.');
  }

  get notificationDelete () {
    return $('h4*=Diary deleted');
  }


}
 export  default new DailyReportsPage();