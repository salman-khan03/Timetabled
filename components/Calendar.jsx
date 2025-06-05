import Event from './Events.jsx';

// This component renders a calendar with time slots and events
// Each time slot can have multiple events
const Calendar = ({ dark }) => {
    return (
        <div className={`Calendar${dark ? ' dark' : ''}`}>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
<tr>
    <td className="time">8 am</td>
    <td><Event event='Starbucks ☕️' color='green' /></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><Event event='Yolk 🍳' color='green' /></td>
    <td></td>
</tr>
<tr>
    <td className="time">9 am</td>
    <td></td>
    <td><Event event='Morning Walk 🚶‍♂️' color='blue' /></td> {/* NEW */}
    <td></td>
    <td><Event event='Subway 🚊' color='pink' /></td>
    <td></td>
    <td><Event event='Museum Visit 🖼️' color='green' /></td> {/* NEW */}
    <td><Event event='The Bean 🫘' color='blue' /></td>
</tr>
<tr>
    <td className="time">10 am</td>
    <td></td>
    <td></td>
    <td><Event event='Coffee Break ☕️' color='pink' /></td> {/* NEW */}
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td className="time">11 am</td>
    <td>     <Event event='Fancy Dinner 🎩' color='green' /></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
                </tbody>
            </table>
     
         
        </div>
    );
}
export default Calendar;
