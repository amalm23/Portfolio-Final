document.addEventListener("DOMContentLoaded", () => {
    const timeCont = document.getElementById("time-container");
    const start = "12-09-2024";
    const start_date = new Date(start);
    const intlNumberFormatter = new Intl.NumberFormat("en-US");

    setInterval(() => {
        const now = new Date();
        let difference = Math.floor((now.getTime() - start_date.getTime()) / 1000);
        const days = Math.floor(difference / (24 * 60 * 60));
        difference %= 24 * 60 * 60;
        const hours = Math.floor(difference / (60 * 60));
        difference %= 60 * 60;
        const minutes = Math.floor(difference / (60));
        const seconds = difference % 60;
        timeCont.innerText = `${intlNumberFormatter.format(days)} days, ${intlNumberFormatter.format(hours)} hours, ${intlNumberFormatter.format(minutes)} minutes, ${intlNumberFormatter.format(seconds)} seconds`;
    }, 1000);
}); 

