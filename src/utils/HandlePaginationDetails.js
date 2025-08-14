export function HandlePaginationDetails(
  oldTo,
  oldFrom,
  oldPage,
  total,
  newPage,
  count
) {
  let newTo, newFrom;

  if (newPage > oldPage) {
    const diff = newPage - oldPage;

    newTo = diff * count + oldTo;

    if (diff * count + oldFrom <= total) {
      newFrom = diff * count + oldFrom;
    } else {
      newFrom = newTo + (total - newTo);
    }
  } else if (newPage < oldPage) {
    const diff = oldPage - newPage;

    newFrom = oldFrom - count * diff < count ? count : oldFrom - count * diff;
    newTo = oldTo - count * diff;
  } else if (newPage === oldPage || !newPage) {
    newTo = oldTo;
    newFrom = oldFrom;
  }

  return { newTo, newFrom };
}
