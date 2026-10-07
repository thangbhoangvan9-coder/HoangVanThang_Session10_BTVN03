const borrowRecords = [
    {
        recordId: "PM01",
        studentId: "SV101",
        bookTitle: "JavaScript Cơ Bản",
        borrowDays: 10,
        isReturned: false
    },
    {
        recordId: "PM02",
        studentId: "SV102",
        bookTitle: "Lập trình C",
        borrowDays: 16,
        isReturned: false
    },
    {
        recordId: "PM03",
        studentId: "SV103",
        bookTitle: "Cơ sở dữ liệu",
        borrowDays: 12,
        isReturned: false
    }
];

console.log("==============================================================");
console.log("              DANH SÁCH PHIẾU MƯỢN BAN ĐẦU");
console.log("==============================================================");

for (const record of borrowRecords) {
    console.log(
        record.recordId + " | " +
        record.studentId + " | " +
        record.bookTitle + " | " +
        record.borrowDays + " ngày | " +
        "Đã trả: " + record.isReturned
    );
}

const newRecord = {
    recordId: "PM04",
    studentId: "SV104",
    bookTitle: "Clean Code",
    borrowDays: 18,
    isReturned: false
};

borrowRecords.push(newRecord);

console.log("\n==============================================================");
console.log("              SAU KHI THÊM PHIẾU PM04");
console.log("==============================================================");

for (const record of borrowRecords) {
    console.log(
        record.recordId + " | " +
        record.studentId + " | " +
        record.bookTitle + " | " +
        record.borrowDays + " ngày | " +
        "Đã trả: " + record.isReturned
    );
}

console.log("\n==============================================================");
console.log("                 PHÍ PHẠT QUÁ HẠN");
console.log("==============================================================");

let totalFine = 0;

for (const record of borrowRecords) {
    let fine = 0;

    if (record.borrowDays > 14) {
        fine = (record.borrowDays - 14) * 5000;
    }

    totalFine += fine;

    console.log(
        record.recordId + " | " +
        record.bookTitle + " | " +
        record.borrowDays + " ngày | " +
        "Phạt: " + fine + " VNĐ"
    );
}

console.log("Tổng phí phạt:", totalFine, "VNĐ");

for (const record of borrowRecords) {
    if (record.recordId === "PM01") {
        record.isReturned = true;
    }
}

console.log("\n==============================================================");
console.log("              SAU KHI CẬP NHẬT PHIẾU PM01");
console.log("==============================================================");

for (const record of borrowRecords) {
    console.log(
        record.recordId + " | " +
        record.studentId + " | " +
        record.bookTitle + " | " +
        record.borrowDays + " ngày | " +
        "Đã trả: " + record.isReturned
    );
}

for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId === "PM03") {
        borrowRecords.splice(i, 1);
        break;
    }
}

console.log("\n==============================================================");
console.log("              BẢNG TỔNG KẾT THƯ VIỆN");
console.log("==============================================================");
console.log("Mã phiếu | Sinh viên | Tên sách | Số ngày | Đã trả");

for (const record of borrowRecords) {
    console.log(
        record.recordId + " | " +
        record.studentId + " | " +
        record.bookTitle + " | " +
        record.borrowDays + " | " +
        record.isReturned
    );
}

console.log("==============================================================");
console.log("Tổng số phiếu còn lại:", borrowRecords.length);
console.log("Tổng phí phạt:", totalFine, "VNĐ");
console.log("==============================================================");

