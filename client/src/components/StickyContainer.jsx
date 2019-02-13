import React from 'react';
import style from '../css/StickyContainer.css';
import DatePickerReservation from './DatePickerReservation.jsx';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'


class StickyContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overview: false,
            restaurantphotos: false,
            restaurantmenu: false,
            restaurantspecials: false,
            restaurantreviews: false,
            twitter: false,
            clickedOnDate: "Tue, 2/19",
            selectedPartyCount: "For 0",
            selectedTime: "12:00 PM"
        }
        this.handleClickedOnDate = this.handleClickedOnDate.bind(this);
        this.handleSetActive = this.handleSetActive.bind(this);
        this.handleSetInactive = this.handleSetInactive.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    componentDidMount() {
        Events.scrollEvent.register('begin', function (to, element) {
        });
        Events.scrollEvent.register('end', function (to, element) {
        });
        scrollSpy.update();
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    scrollTo() {
        scroll.scrollTo(100);
    }
    handleSetActive(to) {
        this.setState({
            [to]: true
        })
    }
    handleSetInactive(to) {
        this.setState({
            [to]: !this.state[to]
        })
    }
    handleClickedOnDate(date) {
        console.log(date, 'date')
        this.setState({
            clickedOnDate: date
        })
    }
    handleSelect(e) {
        let value = e.target.value;
        let name = e.target.id;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className={style.containerSticky}>
                <div className={style.containerStickyComponentTop}>
                    <div id="containerContentid" className={style.containerContent}>
                        <div id="restaurantdetails"></div>
                        <div id="photosmenu"></div>
                        <div id="restaurantreviews"></div>
                    </div>
                </div>
                <div className={style.containerStickyComponents}>
                    <div className={style.appMovingNavBarContainer}>
                        <div className={style.appMovingNavBar}>
                            <ul id="movingNavBar" className={style.appMovingNavBarList}>
                                <li id="restaurantdetails" className={style.appMovingNavBarListHeader}>
                                    <Link activeClass="active" to="restaurantdetails" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}
                                        onSetInactive={this.handleSetInactive} className={this.state.restaurantdetails === true ? style.active : ''}>Overview</Link>
                                </li>
                                <li id="restaurantphotos" className={style.appMovingNavBarListHeader}>
                                    <Link activeClass="active" to="restaurantphotos" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}
                                        onSetInactive={this.handleSetInactive} className={this.state.restaurantphotos === true ? style.active : ''}>Photos</Link>
                                </li>
                                <li id="restaurantmenu" className={style.appMovingNavBarListHeader}>
                                    <Link activeClass="active" to="restaurantmenu" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}
                                        onSetInactive={this.handleSetInactive} className={this.state.restaurantmenu === true ? style.active : ''}>Menu</Link>
                                </li>
                                <li id="restaurantreviews" className={style.appMovingNavBarListHeader}>
                                    <Link activeClass="active" to="restaurantreviews" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}
                                        onSetInactive={this.handleSetInactive} className={this.state.restaurantreviews === true ? style.active : ''}>Reviews</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.appReservationContainer}>
                        <div className={style.appReservation}>
                            <div className={style.reservationCal}>
                                {this.props.reservationCal === true ? <DatePickerReservation handleClickedOnDate={this.handleClickedOnDate} /> : <div></div>}
                            </div>
                            <div className={style.appReservationTop}>
                                <h3 className={style.appReservationHeaderTop}>Make Reservation</h3>
                            </div>
                            <div className={style.appReservationPartySize}>

                                <div className={style.customPartyCounter}>
                                    <div className={style.appReservationHeader + ' ' + style.partySizeHeader}>Party Size</div>
                                    <div className={style.partyCounterInput}>
                                        <div className={style.currentPartyCounter}>{this.state.selectedPartyCount}</div>
                                        <i className={"material-icons" + ' ' + style.arrowDownLogo}>keyboard_arrow_down</i>
                                    </div>
                                </div>
                                <div className={style.partyCounter}>
                                    <select id="selectedPartyCount" onChange={this.handleSelect}>
                                        <option className={style.optionValue} value="1 person">1 person</option>
                                        <option className={style.optionValue} value="2 person">2 person</option>
                                        <option className={style.optionValue} value="3 person">3 person</option>
                                        <option className={style.optionValue} value="4 person">4 person</option>
                                        <option className={style.optionValue} value="5 person">5 person</option>
                                        <option className={style.optionValue} value="6 person">6 person</option>
                                        <option className={style.optionValue} value="7 person">7 person</option>
                                        <option className={style.optionValue} value="8 person">8 person</option>
                                        <option className={style.optionValue} value="9 person">9 person</option>
                                        <option className={style.optionValue} value="10 person">10 person</option>
                                        <option className={style.optionValue} value="11 person">11 person</option>
                                        <option className={style.optionValue} value="12 person">12 person</option>
                                        <option className={style.optionValue} value="13 person">13 person</option>
                                        <option className={style.optionValue} value="14 person">14 person</option>
                                        <option className={style.optionValue} value="15 person">15 person</option>
                                        <option className={style.optionValue} value="16 person">16 person</option>
                                        <option className={style.optionValue} value="17 person">17 person</option>
                                        <option className={style.optionValue} value="18 person">18 person</option>
                                        <option className={style.optionValue} value="19 person">19 person</option>
                                        <option className={style.optionValue} value="20 person">20 person</option>
                                        <option className={style.optionValue} value="Larger Party">Larger Party</option>
                                    </select>
                                </div>
                            </div>

                            <div className={style.appReservationTimeAndDate}>
                                <div className={style.appReservationDate}>
                                    <h4 className={style.appReservationHeader}>Date</h4>
                                    <div id="reservationCal" className={style.reservationDatePickerInput} onClick={this.props.handleClick}>
                                        <a id="reservationCal" className={style.appDatePickerButton}>{this.state.clickedOnDate}</a>
                                        <i className={"material-icons" + ' ' + style.arrowDownLogo}>keyboard_arrow_down</i>
                                    </div>
                                </div>

                                <div className={style.timePicker}>
                                    <div className={style.customSelectTime}>
                                        <div className={style.appReservationHeader + ' ' + style.timePickerHeader}>Time</div>
                                        <div className={style.timePickerInput}>
                                            <div className={style.currentSelectTime}>{this.state.selectedTime}</div>
                                            <i className={"material-icons" + ' ' + style.arrowDownLogo}>keyboard_arrow_down</i>
                                        </div>
                                    </div>
                                    <select id="selectedTime" onChange={this.handleSelect}>
                                        <option className={style.pickerText} value="12:00 AM">12:00 AM</option>
                                        <option className={style.pickerText} value="02:30 AM">12:30 AM</option>
                                        <option className={style.pickerText} value="1:00 AM">1:00 AM</option>
                                        <option className={style.pickerText} value="1:30 AM">1:30 AM</option>
                                        <option className={style.pickerText} value="2:00 AM">2:00 AM</option>
                                        <option className={style.pickerText} value="2:30 AM">2:30 AM</option>
                                        <option className={style.pickerText} value="3:00 AM">3:00 AM</option>
                                        <option className={style.pickerText} value="3:30 AM">3:30 AM</option>
                                        <option className={style.pickerText} value="4:00 AM">4:00 AM</option>
                                        <option className={style.pickerText} value="4:30 AM">4:30 AM</option>
                                        <option className={style.pickerText} value="5:00 AM">5:00 AM</option>
                                        <option className={style.pickerText} value="5:30 AM">5:30 AM</option>
                                        <option className={style.pickerText} value="6:00 AM">6:00 AM</option>
                                        <option className={style.pickerText} value="6:30 AM">6:30 AM</option>
                                        <option className={style.pickerText} value="7:00 AM">7:00 AM</option>
                                        <option className={style.pickerText} value="7:30 AM">7:30 AM</option>
                                        <option className={style.pickerText} value="8:00 AM">8:00 AM</option>
                                        <option className={style.pickerText} value="8:30 AM">8:30 AM</option>
                                        <option className={style.pickerText} value="9:00 AM">9:00 AM</option>
                                        <option className={style.pickerText} value="9:30 AM">9:30 AM</option>
                                        <option className={style.pickerText} value="10:00 AM">10:00 AM</option>
                                        <option className={style.pickerText} value="10:30 AM">10:30 AM</option>
                                        <option className={style.pickerText} value="11:00 AM">11:00 AM</option>
                                        <option className={style.pickerText} value="11:30 AM">11:30 AM</option>
                                        <option className={style.pickerText} value="12:00 PM">12:00 PM</option>
                                        <option className={style.pickerText} value="12:30 PM">12:30 PM</option>
                                        <option className={style.pickerText} value="1:00 PM">1:00 PM</option>
                                        <option className={style.pickerText} value="1:30 PM">1:30 PM</option>
                                        <option className={style.pickerText} value="2:00 PM">2:00 PM</option>
                                        <option className={style.pickerText} value="2:30 PM">2:30 PM</option>
                                        <option className={style.pickerText} value="3:00 PM">3:00 PM</option>
                                        <option className={style.pickerText} value="3:30 PM">3:30 PM</option>
                                        <option className={style.pickerText} value="4:00 PM">4:00 PM</option>
                                        <option className={style.pickerText} value="4:30 PM">4:30 PM</option>
                                        <option className={style.pickerText} value="5:00 PM">5:00 PM</option>
                                        <option className={style.pickerText} value="5:30 PM">5:30 PM</option>
                                        <option className={style.pickerText} value="6:00 PM">6:00 PM</option>
                                        <option className={style.pickerText} value="6:30 PM">6:30 PM</option>
                                        <option className={style.pickerText} value="7:00 PM">7:00 PM</option>
                                        <option className={style.pickerText} value="7:30 PM">7:30 PM</option>
                                        <option className={style.pickerText} value="8:00 PM">8:00 PM</option>
                                        <option className={style.pickerText} value="8:30 PM">8:30 PM</option>
                                        <option className={style.pickerText} value="9:00 PM">9:00 PM</option>
                                        <option className={style.pickerText} value="9:30 PM">9:30 PM</option>
                                        <option className={style.pickerText} value="20:00 PM">10:00 PM</option>
                                        <option className={style.pickerText} value="20:30 PM">10:30 PM</option>
                                        <option className={style.pickerText} value="21:00 PM">11:00 PM</option>
                                        <option className={style.pickerText} value="21:30 PM">11:30 PM</option>
                                    </select>
                                </div>

                            </div>
                            <div className={style.appReservationButtonContainer}>
                                <button className={style.appReservationButton} >Find a Table</button>
                            </div>
                            <div className={style.appReservationBookingContainer}>
                                <i className={"material-icons" + ' ' + style.appReservationBookingLogo}>trending_up</i>
                                <div className={style.appReservationBookingText}>Booked 23 times today</div>
                            </div>
                        </div>
                        <div className={style.appReservationSaveButtonContainer}>
                            <div className={style.saveButtonWrapper}>
                                <div className={style.saveRestaurantButton}>
                                    <i className={"material-icons" + ' ' + style.appReservationSaveLogo}>bookmark_border</i>
                                    <div className={style.saveRestaurantButtonText}>Save this restaurant</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StickyContainer;