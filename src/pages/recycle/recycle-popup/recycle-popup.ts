import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

/**
 * Generated class for the RecylePopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recycle-popup',
  templateUrl: 'recycle-popup.html',
})
export class RecyclePopupPage implements OnInit {
  @Input() popShow: any;
  // @Output() hidePop:EventEmitter<any> = new EventEmitter();

  // choosedDepartment: Number = 1; // 默认全部科室

  filterType: Number = 1; //过滤条件，1-科室,2-状态,3-日期
  dayType: Number = 1; //日期，1-当天,2-当月,3-本月

  choosedDate: number = new Date().getTime(); //当天-默认今天
  choosedStartDate: number; //起始日期-默认本周第一天
  choosedEndDate: number; //结束日期-默认本周最后一天
  choosedMonth: number; //本月
  editDate: String = ''; //当前编辑的日期，choosedDate,choosedStartDate,choosedEndDate


  showCalendar = false; //是否显示日历
  monthData: Object = {};


  statusList = ['全部状态', '已使用', '已过期', '不合格'];
  choosedStatus = this.statusList[0];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecylePopupPage');

  }
  ngOnInit() {
    this.getStartAndEndDate();
    // console.log(this.filterType)
    // this.getMonthData(2018, 1, this.choosedEndDate);
  }
  chooseDate(dayType) {
    this.dayType = dayType;
    this.showCalendar = false;
    this.editDate = '';
  }
  chooseFilter(type) {
    this.filterType = type;
    if (type != 2) {
      this.showCalendar = false;
    }
  }
  /**
   * 选择状态
   */
  chooseStatus(status) {
    this.choosedStatus = status;
  }

  /**
   * 获得起始日期、结束日期
   */
  getStartAndEndDate() {
    let date = new Date(),
      curYear = date.getFullYear(),
      curMonth = date.getMonth(),
      curDate = date.getDate(),
      curDay = date.getDay();

    // 起始
    this.choosedStartDate = new Date(curYear, curMonth, curDate - curDay + 1).getTime();
    // 结束
    this.choosedEndDate = new Date(curYear, curMonth, curDate - curDay + 7).getTime();
  }

  /**
   * 日期加一天
   */
  plusDay(lontime, type) {
    let longtimePerDay = 60 * 60 * 24 * 1000;
    if (type && type == 'start') {
      this.choosedStartDate += longtimePerDay;
    } else if (type && type == 'end') {
      this.choosedEndDate += longtimePerDay;
    } else {
      this.choosedDate += longtimePerDay;
    }
  }

  /**
   * 日期减一天
   */
  minusDay(lontime, type) {
    let longtimePerDay = 60 * 60 * 24 * 1000;
    if (type && type == 'start') {
      this.choosedStartDate += longtimePerDay;
    } else if (type && type == 'end') {
      this.choosedEndDate += longtimePerDay;
    } else {
      this.choosedDate += longtimePerDay;
    }
  }

  /**
   * 显示日历
   * @param 当前编辑的日期
   */
  showCalendarFn(editDate) {
    let dateTime,
      year,
      month;

    switch (editDate) {
      case 'choosedDate':
        dateTime = this.choosedDate;
        break;
      case 'choosedStartDate':
        dateTime = this.choosedStartDate;
        break;
      case 'choosedEndDate':
        dateTime = this.choosedStartDate;
        break;
    }

    year = new Date(dateTime).getFullYear();
    month = new Date(dateTime).getMonth();

    this.editDate = editDate;
    this.monthData = this.getMonthData(year, month + 1, dateTime);
    this.showCalendar = true;
  }

  /**
   * 获取一个月的数据monthData
   */
  getMonthData(year, month, chooseDateTime) {

    if (month > 12) {
      month = 0;
      year++;
    }
    if (month < 1) {
      month = 12;
      year--;
    }
    month = month - 1;
    let date = new Date(chooseDateTime),
      choosedYear = date.getFullYear(),
      choosedMonth = date.getMonth(),
      choosedDate = date.getDate(),

      today = new Date(),
      tYear = today.getFullYear(),
      tMonth = today.getMonth(),
      tDate = today.getDate(),

      startDateOfMonth = new Date(year, month, 1),
      startDayOfWeekDay = startDateOfMonth.getDay(),

      endDateOfMonth = new Date(year, month + 1, 0).getDate(),

      monthData = {
        year: year,
        month: month + 1,
        data: []
      };

    for (var i = 0; i < startDayOfWeekDay; i++) {
      monthData.data.push({
        date: '',
        choosed: false,
        isToday: false
      });
    }

    for (let j = 1; j <= endDateOfMonth; j++) {
      monthData.data.push({
        date: j,
        choosed: choosedYear === year && choosedMonth === month && choosedDate === j,
        isToday: tYear === year && tMonth === month && tDate === j
      });
    }

    console.log(monthData);
    //this.monthData = monthData; 
    return monthData;

  }


}
