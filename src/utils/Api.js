export const fetchAPI = (date) => {
    const dateValue = new Date(date).getDate();
    if(dateValue < 10){
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    } else if (dateValue < 20){
        return ["18:45", "20:30", "21:00"];
    } else {
        return ["17:30", "19:15", "19:30", "20:00", "22:00"];
    }
};

export const submitAPI = (formData) => {
    if(formData) {
        return true;
    }
    return false;
};
