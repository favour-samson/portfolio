// Given two strings s and t, return true if t is an anagram of s. Example: s = "anagram", 
// t = "nagaram" → true
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const map = {};
  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }
  for (let char of t) {
    if (!map[char]) return false;
    map[char]--;
  }
  return true;
}

// Given an array of integers and a target, return the indices of the two numbers that add up 
// to the target. Example: nums = [2,7,11,15], target = 9 → [0,1]
function twoSum(nums, target) {
  var obj = {};
  for (let i = 0; i < nums.length; i++) {
    var n = nums[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
}

// Given an array and a target value, return how many times the target appears.
//  Example: arr = [1,2,3,2,2], target = 2 → 3
function countOcurrences(arr, target) {
  let count = 0;
  for (let num of arr) {
    if (num === target) {
      count++;
    }
  }
  return count;
}

// Find the second largest unique element in an array. Example: arr = [10, 5, 8, 10] → 8
function secondLarget(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLarget = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLarget = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLarget) {
      secondLarget = arr[i];
    }
  }
  return secondLarget;
}

// Given an array, rotate it to the right by k steps. Example: nums = [1,2,3,4,5,6,7],
//  k = 3 → [5,6,7,1,2,3,4]
function reverse(nums, left, right) {
    while (left < right) {
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}

function rotateArray(nums, k) {
    const size = nums.length;
    k = k % size; 
    reverse(nums, 0, size - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, size - 1);
    return nums;
}


// Given a string, find the index of the first non-repeating character. Return -1 if none exists. 
// Example: s = "leetcode" → 0
function firstUniqueCha(s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map[char] = (map[char] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }
  return -1;
}

// Given a string, determine if it reads the same forwards and backwards. 
// Example: s = "racecar" → true
function isPalidrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] != s[right]) return false;
    left++;
    right--;
  }
  return true;
}

// Return the smallest element in an unsorted array. Example: arr = [3,1,4,1,5] → 1
function findMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

// Given an array and integer k, return the total number of continuous subarrays whose sum equals k. 
// Example: nums = [1,1,1], k = 2 → 2

function subArraySum(nums, k) {
  const map = new Map();
  map.set(0, 1);
  let sum = 0;
  let count = 0;
  for (let num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}

// Given a string, find the length of the longest substring with no duplicate characters.
// Example: s = "abcabcbb" → 3 ("abc")
function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  const map = new Map();
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right]) + 1);
    }
    map.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

//  Reverse a string either in-place as a char array, or return a new reversed string. 
// Example: s = "hello" → "olleh"
function reverseString(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

function reverseString(s) {
  let arr = s.split("");
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join("");
}

// Find the minimum value in an array and return how many times it appears. 
// Example: arr = [3,1,2,1,4] → 2
function countSmallestOccurrences(arr) {
  if (arr.length === 0) return 0;
  let minVal = Infinity;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num < minVal) {
      minVal = num; 
      count = 1;
    } else if (num === minVal) {
      count++;
    }
  }
  return count;
}