-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "order_by" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "type_product" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderid" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_id_key" ON "Order"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_orderid_fkey" FOREIGN KEY ("orderid") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
