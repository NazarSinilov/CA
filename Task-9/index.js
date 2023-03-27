function correctIp(ip) {
  const arrIp = ip.split('.');
  for (const val of arrIp) {
    if (val < 0 || val > 255) {
        return false
    }
  }
  return true
}

console.log(correctIp('255.255.255.0'));