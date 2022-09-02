export function groupBy(vs, k) {
  return vs.reduce(function (rv, x) {
    let v = k instanceof Function ? k(x) : x[k]
    let el = rv.find((r) => r && r.key === v)
    if (el) {
      el.values.push(x)
    } else {
      rv.push({ key: v, values: [x] })
    }
    return rv
  }, [])
}
