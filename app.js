
// 1-topshiriq

// const now = new Date()

// console.log(now.getFullYear());

// console.log(now.getMonth() + 1);

// console.log(now.getDay());

// console.log(now.getHours());

// console.log(now.getMinutes());

// 2-topshiriq

// const now = new Date()

// const year = String(now.getFullYear())

// const month = String(now.getMonth() + 1).padStart(2, "0")

// const day = String(now.getDay()).padStart(2, "0")

// const combine = `${year}-${month}-${day}`

// console.log(combine);

// 3-topshiriq

// const now = new Date().toISOString().split("T"[0])
// console.log(now);

// const now = new Date().toLocaleDateString()
// console.log(now);

// 4-topshiriq

// let days = [
//     "Yakshanba",
//     "Dushanba",
//     "Seshanba",
//     "Chorshanba",
//     "Payshanba",
//     "Juma",
//     "Shanba"
// ]

// let now = new Date()

// let daysIndex = now.getDay()

// let today = days[now.getDay()]

// console.log(`Bugun haftaning ${daysIndex} kuni-${today}`);

// 5-topshiriq

// const now = new Date(1991, 8, 1)

// const days = [
//     "Yakshanba",
//     "Dushanba",
//     "Seshanba",
//     "Chorshanba",
//     "Payshanba",
//     "Juma",
//     "Shanba"
// ]
// console.log(now.getFullYear());
// console.log(now.getMonth()) + 1;
// console.log(now.getDate());
// console.log("Hafta kuni:", days[now.getDay()]);

// 6-topshiriq

// const bugun = new Date()

// const yangiYil = new Date(2027, 0, 1)

// const farqMillisekund = yangiYil - bugun

// const birKun = 24 * 60 * 60 * 1000

// const qolganKunlar = Math.ceil(farqMillisekund / birKun)
// console.log(qolganKunlar);

// 7-topshiriq

// const birthday = new Date(2008, 11, 7);

// const today = new Date();

// let age = today.getFullYear() - birthday.getFullYear();

// const m = today.getMonth() - birthday.getMonth();

// if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
//     age--;
// }

// console.log(`Mening yoshim: ${age}`);

// 8-topshiriq

// const start = Date.now();

// for (let i = 1; i <= 1_000_000; i++) {
// }

// const end = Date.now();

// const duration = end - start;

// console.log(`Loop 1 000 000 marta ishladi: ${duration} ms`);


// 9-topshiriq

// const now = new Date()

// const months = [
//     "Yanvar",
//     "Fevral",
//     "Mart",
//     "Aprel",
//     "May",
//     "Iyun",
//     "Iyul",
//     "Avgust",
//     "Sentabr",
//     "Oktabr",
//     "Noyabr",
//     "Dekabr",
// ]

// const kun = new Date().getDate()

// const oy = months[now.getMonth()]

// const yil = new Date().getFullYear()

// const KunOyYil = `${kun}-${oy}, ${yil}`

// console.log(KunOyYil);

// 10-topshiriq

// function showDateCard() {
//     const now = new Date();

//     const months = [
//         "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
//         "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"
//     ];

//     const weekDays = [
//         "Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"
//     ];

//     const day = now.getDate();
//     const monthName = months[now.getMonth()];
//     const year = now.getFullYear();
//     const weekDayName = weekDays[now.getDay()];

//     const hours = String(now.getHours()).padStart(2, "0");
//     const minutes = String(now.getMinutes()).padStart(2, "0");
//     const seconds = String(now.getSeconds()).padStart(2, "0");

//     const timestamp = now.getTime();

//     console.log("================================");
//     console.log(`📅 Bugungi sana: ${day}-${monthName}, ${year}`);
//     console.log(`⏰ Vaqt: ${hours}:${minutes}:${seconds}`);
//     console.log(`📆 Hafta kuni: ${weekDayName}`);
//     console.log(`🕐 Unix timestamp: ${timestamp}`);
//     console.log("================================");
// }

// showDateCard();

