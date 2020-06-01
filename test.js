db.products
  .find({
    $or: [
      { $and: [{ name: "AC3 Phone" }, { price: 200 }] },
      { $and: [{ name: "AC7 Phone" }, { price: 320 }] },
    ],
  })
  .pretty();

db.products
  .find({
    $and: [{ name: "AC3 Phone" }, { name: "AC7 Phone" }],
  })
  .pretty();

// 50 < price < 200
db.products
  .find({
    $and: [{ price: { $lte: 200 } }, { price: { $gte: 50 } }],
  })
  .pretty();

db.products.find({ name: { $gt: "abc" } }).pretty();

db.table1.find({ arr: "1" }).pretty();
