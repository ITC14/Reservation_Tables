import {initializeTimes,updateTimes} from './Main.js';

    test("Should return the correct list of initial times", ()=>{
        const expectedTimes = [
            '09:00', '10:00', '11:00', '12:00', '13:00',
            '14:00', '15:00', '16:00', '17:00'
        ];
    
        const times = initializeTimes();
    
        expect(times).toEqual(expectedTimes);
    });

describe("UpdateTimes",()=>{
    test("should dispatched the correct times",()=>{
        const dispatch = jest.fn();
        updateTimes(dispatch,new Date());

        expect(dispatch).toHaveBeenCalledWith({
            type:Actions.Update_Times
    })
    });
})