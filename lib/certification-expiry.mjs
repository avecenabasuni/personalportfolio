export function isCertificationExpired(cert, referenceDate = new Date()) {
  if (!cert.expiresOn) {
    return false;
  }

  const expiryDate = new Date(cert.expiresOn);
  if (Number.isNaN(expiryDate.getTime())) {
    return false;
  }

  expiryDate.setHours(23, 59, 59, 999);
  return expiryDate < referenceDate;
}
