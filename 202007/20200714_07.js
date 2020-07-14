var intersection = function(nums1, nums2) {
  let xiao
  let da
  if (nums2.length >= nums1.length) {
    da = nums2
    xiao = nums1
  } else {
    da = nums1
    xiao = nums2
  }

  let set = new Set(da)
  let set2 = new Set()

  for (const i of xiao) {
    if (set.has(i)) set2.add(i)
  }
  return [...set2]
};

console.log(intersection([1, 3, 4], [1, 3, 5]));