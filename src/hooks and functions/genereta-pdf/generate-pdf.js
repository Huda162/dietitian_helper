import jsPDF from "jspdf";
import "jspdf-autotable";


const generatePDF = patient => {
    const doc = new jsPDF();

    const patientInfoTableColumns = ["Name", "Phone Number", "Email", "Date of Birth", "City"];
    const patientInfoTableRows = [];
    let startY = 20;
    const mealsTableColumns = ["Meal", "Amount", "Calories"];
    const saturdayMealsTableRows = [];
    const sundayMealsTableRows = [];
    const mondayMealsTableRows = [];
    const tuesdayMealsTableRows = [];
    const wednesdayMealsTableRows = [];
    const thursdayMealsTableRows = [];
    const fridayMealsTableRows = [];

    console.log('patientInfo are:', patientInfoTableRows);

    const patientInfo = [
        patient.name,
        patient.phone,
        patient.email,
        patient.dob,
        patient.city
    ];
    patientInfoTableRows.push(patientInfo);
    doc.autoTable(patientInfoTableColumns, patientInfoTableRows, { startY: startY });
    doc.text("Patient Info", 14, startY - 5);
    startY = startY + 30;

    patient.saturdayMeals.forEach(meal => {
        const food = [
            meal.food,
            meal.amount,
            meal.calories
        ];
        saturdayMealsTableRows.push(food);
        startY = startY + 10;
    });
    doc.autoTable(mealsTableColumns, saturdayMealsTableRows, { startY: startY });
    doc.text("Saturday Meals", 14, startY - 5);
    startY = startY + 30;

    patient.sundayMeals.forEach(meal => {
        const food = [
            meal.food,
            meal.amount,
            meal.calories
        ];
        sundayMealsTableRows.push(food);
        startY = startY + 10;

    });
    doc.autoTable(mealsTableColumns, sundayMealsTableRows, { startY: startY });
    doc.text("Sunday Meals", 14, startY - 5);
    startY = startY + 30;

    patient.mondayMeals.forEach(meal => {
        const food = [
            meal.food,
            meal.amount,
            meal.calories
        ];
        mondayMealsTableRows.push(food);
        startY = startY + 10;

    });
    doc.autoTable(mealsTableColumns, mondayMealsTableRows, { startY: startY });
    doc.text("Monday Meals", 14, startY - 5);
    startY = startY + 30;

    patient.tuesdayMeals.forEach(meal => {
        const food = [
            meal.food,
            meal.amount,
            meal.calories
        ];
        tuesdayMealsTableRows.push(food);
        startY = startY + 10;

    });
    doc.autoTable(mealsTableColumns, tuesdayMealsTableRows, { startY: startY });
    doc.text("Tuesday Meals", 14, startY - 5);
    startY = startY + 30;

    patient.wednesdayMeals.forEach(meal => {
        const food = [
            meal.food,
            meal.amount,
            meal.calories
        ];
        wednesdayMealsTableRows.push(food);
        startY = startY + 10;

    });
    doc.autoTable(mealsTableColumns, wednesdayMealsTableRows, { startY: startY });
    doc.text("Wednesday Meals", 14, startY - 5);
    startY = startY + 30;

    patient.thursdayMeals.forEach(meal => {
        const food = [
            meal.food,
            meal.amount,
            meal.calories
        ];
        thursdayMealsTableRows.push(food);
        startY = startY + 10;

    });
    doc.autoTable(mealsTableColumns, thursdayMealsTableRows, { startY: startY });
    doc.text("Thursday Meals", 14, startY - 5);
    startY = startY + 30;

    patient.fridayMeals.forEach(meal => {
        const food = [
            meal.food,
            meal.amount,
            meal.calories
        ];
        fridayMealsTableRows.push(food);
        startY = startY + 10;

    });
    doc.autoTable(mealsTableColumns, fridayMealsTableRows, { startY: startY });
    doc.text("Friday Meals", 14, startY - 5);

    doc.save(`${patient.name}DietProgram.pdf`);
};

export default generatePDF;