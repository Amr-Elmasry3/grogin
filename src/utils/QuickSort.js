export function QuickSort(arr, type, sort) {
  if ([...arr].length <= 1) return arr;

  const pivot = arr[0];
  const leftArr = [];
  const rightArr = [];

  const pivotPrice = pivot.price - pivot.price * (pivot.discount / 100);
  const pivotRate = pivot.rate;

  for (let x = 1; x < [...arr].length; x++) {
    if (type === "price") {
      const itemPrice = arr[x].price - arr[x].price * (arr[x].discount / 100);

      if (sort === "low") {
        itemPrice <= pivotPrice ? leftArr.push(arr[x]) : rightArr.push(arr[x]);
      } else if (sort === "high") {
        itemPrice > pivotPrice ? leftArr.push(arr[x]) : rightArr.push(arr[x]);
      }
    } else if (type === "rate") {
      const itemRate = arr[x].rate;

      if (sort === "low") {
        itemRate <= pivotRate ? leftArr.push(arr[x]) : rightArr.push(arr[x]);
      } else if (sort === "high") {
        itemRate > pivotRate ? leftArr.push(arr[x]) : rightArr.push(arr[x]);
      }
    }
  }

  return [
    ...QuickSort(leftArr, type, sort),
    pivot,
    ...QuickSort(rightArr, type, sort),
  ];
}
