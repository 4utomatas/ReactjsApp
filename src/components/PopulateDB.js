// Populate local storage with data
export default function PopulateDB() {
    localStorage.clear();
    
    let arr = [
        // Products
        { Name: "Fictional Phone 3000", EAN: "5165157459314", Type: "Phone", Weight: "100", Color: "Red", Active: "false", Quantity: 10, Price: 500.77 },
        { Name: "Fictional Phone 3001", EAN: "8214110681686", Type: "Phone", Weight: "127", Color: "Black", Active: "false", Quantity: 10, Price: 500 },
        { Name: "Fictional Phone 3001", EAN: "5787798767753", Type: "Phone", Weight: "127", Color: "Silver", Active: "true", Quantity: 10, Price: 500},
        { Name: "Fictional Phone 3002", EAN: "3913406269384", Type: "Phone", Weight: "107", Color: "Gold", Active: "false", Quantity: 10, Price: 500},
        { Name: "Fictional Phone 3003", EAN: "6976202303917", Type: "Phone", Weight: "106", Color: "Rose Gold", Active: "false", Quantity: 10, Price: 500},
        { Name: "Tank toy", EAN: "7483869738297", Type: "Toy", Weight: "500", Color: "khaki", Active: "true", Quantity: 10, Price: 500} 
    ];
    let qhistory = [
        // Quantity History
        {EAN: "5165157459314", History: [
            {date: "2020-02-01", value: 10},
            {date: "2020-02-02", value: 5},
            {date: "2020-02-05", value: 7},
            {date: "2020-02-10", value: 20}
        ]}
    ];
    let phistory = [
        // Price History
        {EAN: "5165157459314", History: [
            {date: "2020-02-01", value: 1000.05},
            {date: "2020-02-02", value: 700.70},
            {date: "2020-02-05", value: 777.77},
            {date: "2020-02-10", value: 2000.10}
        ]}
    ];
    for( let el of arr) {
        // console.log(el);
        let myJSON = JSON.stringify(el);
        // console.log("JSON:", myJSON);
        localStorage.setItem(el.EAN, myJSON);
    }
    for(let el of phistory) {
        let myJSON = JSON.stringify(el);
        localStorage.setItem(`p${el.EAN}`, myJSON);
    }
    for(let el of qhistory) {
        let myJSON = JSON.stringify(el);
        localStorage.setItem(`q${el.EAN}`, myJSON);
    }
    // Reload the page to see the changes
    window.location.reload(false);
    return null;
}