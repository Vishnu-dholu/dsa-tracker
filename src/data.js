// src/data.js

export const thirtyDaySheet = [
  {
    topic: "I. Two Pointer Patterns",
    patterns: [
      { pattern: "Pattern 1: Converging", problems: ["11. Container With Most Water", "15. 3Sum", "167. Two Sum II - Input Array Is Sorted"] },
      { pattern: "Pattern 2: Fast & Slow", problems: ["141. Linked List Cycle", "287. Find the Duplicate Number"] },
      { pattern: "Pattern 3: Fixed Separation", problems: ["19. Remove Nth Node From End of List"] },
      { pattern: "Pattern 4: In-place Array Modification", problems: ["26. Remove Duplicates from Sorted Array", "75. Sort Colors", "283. Move Zeroes"] },
      { pattern: "Pattern 6: Expanding From Center", problems: ["5. Longest Palindromic Substring"] },
      { pattern: "Pattern 7: String Reversal", problems: ["151. Reverse Words in a String"] }
    ]
  },
  {
    topic: "II. Sliding Window Patterns",
    patterns: [
      { pattern: "Pattern 9: Variable Size Sliding Window", problems: ["3. Longest Substring Without Repeating Characters", "76. Minimum Window Substring", "424. Longest Repeating Character Replacement", "209. Minimum Size Subarray Sum"] },
      { pattern: "Pattern 11: Character Frequency Matching", problems: ["438. Find All Anagrams in a String"] }
    ]
  },
  {
    topic: "III. Tree Traversal Patterns (DFS & BFS)",
    patterns: [
      { pattern: "Pattern 12: Level Order Traversal", problems: ["102. Binary Tree Level Order Traversal", "199. Binary Tree Right Side View"] },
      { pattern: "Pattern 13: Recursive Preorder Traversal", problems: ["105. Construct Binary Tree from Preorder and Inorder Traversal", "226. Invert Binary Tree"] },
      { pattern: "Pattern 14: Recursive Inorder Traversal", problems: ["98. Validate Binary Search Tree", "230. Kth Smallest Element in a BST"] },
      { pattern: "Pattern 15: Recursive Postorder Traversal", problems: ["104. Maximum Depth of Binary Tree", "124. Binary Tree Maximum Path Sum", "543. Diameter of Binary Tree"] },
      { pattern: "Pattern 16: Lowest Common Ancestor", problems: ["235. Lowest Common Ancestor of a Binary Search Tree", "236. Lowest Common Ancestor of a Binary Tree"] },
      { pattern: "Pattern 17: Serialization and Deserialization", problems: ["297. Serialize and Deserialize Binary Tree"] }
    ]
  },
  {
    topic: "IV. Graph Traversal Patterns (DFS & BFS)",
    patterns: [
      { pattern: "Pattern 18: DFS - Connected Components / Island Counting", problems: ["200. Number of Islands", "695. Max Area of Island", "733. Flood Fill"] },
      { pattern: "Pattern 20: DFS - Cycle Detection", problems: ["207. Course Schedule"] },
      { pattern: "Pattern 21: BFS - Topological Sort", problems: ["210. Course Schedule II", "269. Alien Dictionary"] },
      { pattern: "Pattern 22: Deep Copy / Cloning", problems: ["133. Clone Graph"] },
      { pattern: "Pattern 25: Union-Find", problems: ["323. Number of Connected Components in an Undirected Graph", "547. Number of Provinces"] },
      { pattern: "Pattern 29: Bidirectional BFS", problems: ["127. Word Ladder"] }
    ]
  },
  {
    topic: "V. Dynamic Programming (DP) Patterns",
    patterns: [
      { pattern: "Pattern 30: Fibonacci Style", problems: ["70. Climbing Stairs", "198. House Robber"] },
      { pattern: "Pattern 31: Kadane's Algorithm", problems: ["53. Maximum Subarray", "152. Maximum Product Subarray"] },
      { pattern: "Pattern 32: Coin Change / Unbounded Knapsack", problems: ["322. Coin Change"] },
      { pattern: "Pattern 33: 0/1 Knapsack", problems: ["416. Partition Equal Subset Sum"] },
      { pattern: "Pattern 34: Word Break Style", problems: ["139. Word Break"] },
      { pattern: "Pattern 35: Longest Common Subsequence", problems: ["1143. Longest Common Subsequence"] },
      { pattern: "Pattern 37: Unique Paths on Grid", problems: ["62. Unique Paths"] },
      { pattern: "Pattern 40: Longest Increasing Subsequence", problems: ["300. Longest Increasing Subsequence"] },
      { pattern: "Pattern 41: Stock problems", problems: ["121. Best Time to Buy and Sell Stock"] }
    ]
  },
  {
    topic: "VI. Heap (Priority Queue) Patterns",
    patterns: [
      { pattern: "Pattern 42: Top K Elements", problems: ["215. Kth Largest Element in an Array", "347. Top K Frequent Elements"] },
      { pattern: "Pattern 43: Two Heaps for Median Finding", problems: ["295. Find Median from Data Stream"] },
      { pattern: "Pattern 44: K-way Merge", problems: ["23. Merge k Sorted Lists"] },
      { pattern: "Pattern 45: Scheduling", problems: ["253. Meeting Rooms II", "767. Reorganize String"] }
    ]
  },
  {
    topic: "VII. Backtracking Patterns",
    patterns: [
      { pattern: "Pattern 46: Subsets", problems: ["78. Subsets"] },
      { pattern: "Pattern 47: Permutations", problems: ["46. Permutations"] },
      { pattern: "Pattern 48: Combination Sum", problems: ["39. Combination Sum"] },
      { pattern: "Pattern 50: Word Search", problems: ["79. Word Search"] },
      { pattern: "Pattern 51: N-Queens", problems: ["51. N-Queens"] }
    ]
  },
  {
    topic: "VIII. Greedy Patterns",
    patterns: [
      { pattern: "Pattern 53: Interval Merging", problems: ["56. Merge Intervals", "57. Insert Interval"] },
      { pattern: "Pattern 54: Jump Game", problems: ["55. Jump Game"] }
    ]
  },
  {
    topic: "IX. Binary Search Patterns",
    patterns: [
      { pattern: "Pattern 59: Binary Search On Sorted Array", problems: ["33. Search in Rotated Sorted Array", "153. Find Minimum in Rotated Sorted Array", "74. Search a 2D Matrix"] },
      { pattern: "Pattern 61: On Answer / Condition Function", problems: ["875. Koko Eating Bananas"] }
    ]
  },
  {
    topic: "X. Stack Patterns",
    patterns: [
      { pattern: "Pattern 64: Valid Parentheses Matching", problems: ["20. Valid Parentheses"] },
      { pattern: "Pattern 65: Monotonic Stack", problems: ["739. Daily Temperatures", "84. Largest Rectangle in Histogram"] },
      { pattern: "Pattern 69: Largest Rectangle in Histogram", problems: ["84. Largest Rectangle in Histogram"] }
    ]
  },
  {
    topic: "XI. Bit Manipulation Patterns",
    patterns: [
      { pattern: "Pattern 70: Bitwise XOR", problems: ["136. Single Number", "268. Missing Number"] },
      { pattern: "Pattern 71: Bitwise AND", problems: ["191. Number of 1 Bits", "338. Counting Bits"] }
    ]
  },
  {
    topic: "XII. Linked List Manipulation Patterns",
    patterns: [
      { pattern: "Pattern 74: In-place Reversal (Linked List)", problems: ["206. Reverse Linked List", "92. Reverse Linked List II"] },
      { pattern: "Pattern 75: Merging Two Sorted Lists", problems: ["21. Merge Two Sorted Lists"] }
    ]
  },
  {
    topic: "XIII. Array/Matrix Manipulation Patterns",
    patterns: [
      { pattern: "Pattern 79: In-place Rotation", problems: ["48. Rotate Image"] },
      { pattern: "Pattern 80: Spiral Traversal", problems: ["54. Spiral Matrix"] },
      { pattern: "Pattern 81: In-place Marking", problems: ["73. Set Matrix Zeroes"] },
      { pattern: "Pattern 82: Prefix/Suffix Products", problems: ["238. Product of Array Except Self"] }
    ]
  },
  {
    topic: "XIV. String Manipulation Patterns",
    patterns: [
      { pattern: "Pattern 87: Anagram Check", problems: ["49. Group Anagrams", "242. Valid Anagram"] }
    ]
  },
  {
    topic: "XV. Design Patterns",
    patterns: [
      { pattern: "Pattern 93: Design", problems: ["146. LRU Cache", "380. Insert Delete GetRandom O(1)"] },
      { pattern: "Pattern 94: Tries", problems: ["208. Implement Trie (Prefix Tree)", "211. Design Add and Search Words Data Structure"] }
    ]
  }
];

export const fullSheet = [
  {
    topic: "I. Two Pointer Patterns",
    patterns: [
      { pattern: "Pattern 1: Converging", problems: ["11. Container With Most Water", "15. 3Sum", "16. 3Sum Closest", "18. 4Sum", "167. Two Sum II - Input Array Is Sorted", "349. Intersection of Two Arrays", "881. Boats to Save People", "977. Squares of a Sorted Array", "259. 3Sum Smaller"] },
      { pattern: "Pattern 2: Fast & Slow", problems: ["141. Linked List Cycle", "202. Happy Number", "287. Find the Duplicate Number", "392. Is Subsequence"] },
      { pattern: "Pattern 3: Fixed Separation", problems: ["19. Remove Nth Node From End of List", "876. Middle of the Linked List", "2095. Delete the Middle Node of a Linked List"] },
      { pattern: "Pattern 4: In-place Array Modification", problems: ["26. Remove Duplicates from Sorted Array", "27. Remove Element", "75. Sort Colors", "80. Remove Duplicates from Sorted Array II", "283. Move Zeroes", "443. String Compression", "905. Sort Array By Parity", "2337. Move Pieces to Obtain a String", "2938. Separate Black and White Balls"] },
      { pattern: "Pattern 5: String Comparison with special characters", problems: ["844. Backspace String Compare", "1598. Crawler Log Folder", "2390. Removing Stars From a String"] },
      { pattern: "Pattern 6: Expanding From Center", problems: ["5. Longest Palindromic Substring", "647. Palindromic Substrings"] },
      { pattern: "Pattern 7: String Reversal", problems: ["151. Reverse Words in a String", "344. Reverse String", "345. Reverse Vowels of a String", "541. Reverse String II"] }
    ]
  },
  {
    topic: "II. Sliding Window Patterns",
    patterns: [
      { pattern: "Pattern 8: Fixed Size", problems: ["346. Moving Average from Data Stream", "643. Maximum Average Subarray I", "2985. Calculate Compressed Mean", "3254. Find the Power of K-Size Subarrays I", "3318. Find X-Sum of All K-Long Subarrays I"] },
      { pattern: "Pattern 9: Variable Size", problems: ["3. Longest Substring Without Repeating Characters", "76. Minimum Window Substring", "209. Minimum Size Subarray Sum", "219. Contains Duplicate II", "424. Longest Repeating Character Replacement", "713. Subarray Product Less Than K", "904. Fruit Into Baskets", "1004. Max Consecutive Ones III", "1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit", "1493. Longest Subarray of 1's After Deleting One Element", "1658. Minimum Operations to Reduce X to Zero", "1838. Frequency of the Most Frequent Element", "2461. Maximum Sum of Distinct Subarrays With Length K", "2516. Take K of Each Character From Left and Right", "2762. Continuous Subarrays", "2779. Maximum Beauty of an Array After Applying Operation", "2981. Find Longest Special Substring That Occurs Thrice I", "3026. Maximum Good Subarray Sum", "3346. Maximum Frequency of an Element After Performing Operations I", "3347. Maximum Frequency of an Element After Performing Operations II"] },
      { pattern: "Pattern 10: Monotonic Queue for Max/Min", problems: ["239. Sliding Window Maximum", "862. Shortest Subarray with Sum at Least K", "1696. Jump Game VI"] },
      { pattern: "Pattern 11: Character Frequency Matching", problems: ["1. Two Sum", "438. Find All Anagrams in a String", "567. Permutation in String"] }
    ]
  },
  {
    topic: "III. Tree Traversal Patterns (DFS & BFS)",
    patterns: [
      { pattern: "Pattern 12: Level Order Traversal", problems: ["102. Binary Tree Level Order Traversal", "103. Binary Tree Zigzag Level Order Traversal", "199. Binary Tree Right Side View", "515. Find Largest Value in Each Tree Row", "1161. Maximum Level Sum of a Binary Tree"] },
      { pattern: "Pattern 13: Recursive Preorder Traversal", problems: ["100. Same Tree", "101. Symmetric Tree", "105. Construct Binary Tree from Preorder and Inorder Traversal", "114. Flatten Binary Tree to Linked List", "226. Invert Binary Tree", "257. Binary Tree Paths", "988. Smallest String Starting From Leaf"] },
      { pattern: "Pattern 14: Recursive Inorder Traversal", problems: ["94. Binary Tree Inorder Traversal", "98. Validate Binary Search Tree", "173. Binary Search Tree Iterator", "230. Kth Smallest Element in a BST", "501. Find Mode in Binary Search Tree", "530. Minimum Absolute Difference in BST"] },
      { pattern: "Pattern 15: Recursive Postorder Traversal", problems: ["104. Maximum Depth of Binary Tree", "110. Balanced Binary Tree", "124. Binary Tree Maximum Path Sum", "145. Binary Tree Postorder Traversal", "337. House Robber III", "366. Find Leaves of Binary Tree", "543. Diameter of Binary Tree", "863. All Nodes Distance K in Binary Tree", "1110. Delete Nodes And Return Forest", "2458. Height of Binary Tree After Subtree Removal Queries"] },
      { pattern: "Pattern 16: Lowest Common Ancestor", problems: ["235. Lowest Common Ancestor of a Binary Search Tree", "236. Lowest Common Ancestor of a Binary Tree"] },
      { pattern: "Pattern 17: Serialization and Deserialization", problems: ["297. Serialize and Deserialize Binary Tree", "572. Subtree of Another Tree", "652. Find Duplicate Subtrees"] }
    ]
  },
  {
    topic: "IV. Graph Traversal Patterns (DFS & BFS)",
    patterns: [
      { pattern: "Pattern 18: DFS - Connected Components / Island Counting", problems: ["130. Surrounded Regions", "200. Number of Islands", "417. Pacific Atlantic Water Flow", "547. Number of Provinces", "695. Max Area of Island", "733. Flood Fill", "841. Keys and Rooms", "1020. Number of Enclaves", "1254. Number of Closed Islands", "1905. Count Sub Islands", "2101. Detonate the Maximum Bombs"] },
      { pattern: "Pattern 19: BFS - Connected Components / Island Counting", problems: ["542. 01 Matrix", "994. Rotting Oranges", "1091. Shortest Path in Binary Matrix"] },
      { pattern: "Pattern 20: DFS - Cycle Detection", problems: ["207. Course Schedule", "210. Course Schedule II", "802. Find Eventual Safe States", "1059. All Paths from Source Lead to Destination"] },
      { pattern: "Pattern 21: BFS - Topological Sort(Kahn's Algorithm)", problems: ["210. Course Schedule II", "269. Alien Dictionary", "310. Minimum Height Trees", "444. Sequence Reconstruction", "1136. Parallel Courses", "1857. Largest Color Value in a Directed Graph", "2050. Parallel Courses III", "2115. Find All Possible Recipes from Given Supplies", "2392. Build a Matrix With Conditions"] },
      { pattern: "Pattern 22: Deep Copy / Cloning", problems: ["133. Clone Graph", "1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance", "138. Copy List with Random Pointer", "1490. Clone N-ary Tree"] },
      { pattern: "Pattern 23: Shortest Path", problems: ["743. Network Delay Time", "778. Swim in Rising Water", "1514. Path with Maximum Probability", "1631. Path With Minimum Effort", "1976. Number of Ways to Arrive at Destination", "2045. Second Minimum Time to Reach Destination", "2203. Minimum Weighted Subgraph With the Required Paths", "2290. Minimum Obstacle Removal to Reach Corner", "2577. Minimum Time to Visit a Cell In a Grid", "2812. Find the Safest Path in a Grid"] },
      { pattern: "Pattern 24: Shortest Path (Bellman-Ford / BFS+K)", problems: ["787. Cheapest Flights Within K Stops", "1129. Shortest Path with Alternating Colors"] },
      { pattern: "Pattern 25: Union-Find", problems: ["200. Number of Islands", "261. Graph Valid Tree", "305. Number of Islands II", "323. Number of Connected Components in an Undirected Graph", "547. Number of Provinces", "684. Redundant Connection", "721. Accounts Merge", "737. Sentence Similarity II", "947. Most Stones Removed with Same Row or Column", "952. Largest Component Size by Common Factor", "959. Regions Cut By Slashes", "1101. The Earliest Moment When Everyone Become Friends"] },
      { pattern: "Pattern 26: Strongly Connected Components (Kosaraju / Tarjan)", problems: ["210. Course Schedule II", "547. Number of Provinces", "1192. Critical Connections in a Network", "2127. Maximum Employees to Be Invited to a Meeting"] },
      { pattern: "Pattern 27: Bridges & Articulation Points (Tarjan low-link)", problems: ["1192. Critical Connections in a Network", "2360. Longest Cycle in a Graph"] },
      { pattern: "Pattern 28: Minimum Spanning Tree (Kruskal / Prim / DSU + heap)", problems: ["1135. Connecting Cities With Minimum Cost", "1584. Min Cost to Connect All Points", "1168. Optimize Water Distribution in a Village", "1489. Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree"] },
      { pattern: "Pattern 29: Bidirectional BFS", problems: ["127. Word Ladder", "126. Word Ladder II", "815. Bus Routes"] }
    ]
  },
  {
    topic: "V. Dynamic Programming (DP) Patterns",
    patterns: [
      { pattern: "Pattern 30: Fibonacci Style", problems: ["70. Climbing Stairs", "91. Decode Ways", "198. House Robber", "213. House Robber II", "337. House Robber III", "509. Fibonacci Number", "740. Delete and Earn", "746. Min Cost Climbing Stairs"] },
      { pattern: "Pattern 31: Kadane's Algorithm for Max/Min Subarray", problems: ["53. Maximum Subarray", "918. Maximum Sum Circular Subarray", "2321. Maximum Score Of Spliced Array", "1749. Maximum Absolute Sum of Any Subarray", "152. Maximum Product Subarray"] },
      { pattern: "Pattern 32: Coin Change / Unbounded Knapsack Style", problems: ["322. Coin Change", "377. Combination Sum IV", "518. Coin Change II"] },
      { pattern: "Pattern 33: 0/1 Knapsack, Subset Sum Style", problems: ["416. Partition Equal Subset Sum", "494. Target Sum"] },
      { pattern: "Pattern 34: Word Break Style", problems: ["139. Word Break", "140. Word Break II"] },
      { pattern: "Pattern 35: Longest Common Subsequence - LCS", problems: ["1143. Longest Common Subsequence", "1092. Shortest Common Supersequence", "1312. Minimum Insertion Steps to Make a String Palindrome"] },
      { pattern: "Pattern 36: Edit Distance / Levenshtein Distance", problems: ["72. Edit Distance", "583. Delete Operation for Two Strings", "712. Minimum ASCII Delete Sum for Two Strings"] },
      { pattern: "Pattern 37: Unique Paths on Grid", problems: ["62. Unique Paths", "63. Unique Paths II", "64. Minimum Path Sum", "120. Triangle", "221. Maximal Square", "931. Minimum Falling Path Sum", "1277. Count Square Submatrices with All Ones"] },
      { pattern: "Pattern 38: Interval DP", problems: ["312. Burst Balloons", "546. Remove Boxes"] },
      { pattern: "Pattern 39: Catalan Numbers", problems: ["95. Unique Binary Search Trees II", "96. Unique Binary Search Trees", "241. Different Ways to Add Parentheses"] },
      { pattern: "Pattern 40: Longest Increasing Subsequence", problems: ["300. Longest Increasing Subsequence", "354. Russian Doll Envelopes", "1671. Minimum Number of Removals to Make Mountain Array", "2407. Longest Increasing Subsequence II"] },
      { pattern: "Pattern 41: Stock problems", problems: ["121. Best Time to Buy and Sell Stock", "122. Best Time to Buy and Sell Stock II", "123. Best Time to Buy and Sell Stock III", "188. Best Time to Buy and Sell Stock IV", "309. Best Time to Buy and Sell Stock with Cooldown"] }
    ]
  },
  {
    topic: "VI. Heap (Priority Queue) Patterns",
    patterns: [
      { pattern: "Pattern 42: Top K Elements", problems: ["215. Kth Largest Element in an Array", "347. Top K Frequent Elements", "451. Sort Characters By Frequency", "506. Relative Ranks", "703. Kth Largest Element in a Stream", "973. K Closest Points to Origin", "1046. Last Stone Weight", "2558. Take Gifts From the Richest Pile"] },
      { pattern: "Pattern 43: Two Heaps for Median Finding", problems: ["295. Find Median from Data Stream", "1825. Finding MK Average"] },
      { pattern: "Pattern 44: K-way Merge", problems: ["23. Merge k Sorted Lists", "373. Find K Pairs with Smallest Sums", "378. Kth Smallest Element in a Sorted Matrix", "632. Smallest Range Covering Elements from K Lists"] },
      { pattern: "Pattern 45: Scheduling / Minimum Cost", problems: ["253. Meeting Rooms II", "767. Reorganize String", "857. Minimum Cost to Hire K Workers", "1642. Furthest Building You Can Reach", "1792. Maximum Average Pass Ratio", "1834. Single-Threaded CPU", "1942. The Number of the Smallest Unoccupied Chair", "2402. Meeting Rooms III"] }
    ]
  },
  {
    topic: "VII. Backtracking Patterns",
    patterns: [
      { pattern: "Pattern 46: Subsets (Include/Exclude)", problems: ["17. Letter Combinations of a Phone Number", "77. Combinations", "78. Subsets", "90. Subsets II"] },
      { pattern: "Pattern 47: Permutations", problems: ["31. Next Permutation", "46. Permutations", "60. Permutation Sequence"] },
      { pattern: "Pattern 48: Combination Sum", problems: ["39. Combination Sum", "40. Combination Sum II"] },
      { pattern: "Pattern 49: Parentheses Generation", problems: ["22. Generate Parentheses", "301. Remove Invalid Parentheses"] },
      { pattern: "Pattern 50: Word Search / Path Finding in Grid", problems: ["79. Word Search", "212. Word Search II", "2018. Check if Word Can Be Placed In Crossword"] },
      { pattern: "Pattern 51: N-Queens / Constraint Satisfaction", problems: ["37. Sudoku Solver", "51. N-Queens"] },
      { pattern: "Pattern 52: Palindrome Partitioning", problems: ["131. Palindrome Partitioning", "132. Palindrome Partitioning II", "1457. Pseudo-Palindromic Paths in a Binary Tree"] }
    ]
  },
  {
    topic: "VIII. Greedy Patterns",
    patterns: [
      { pattern: "Pattern 53: Interval Merging/Scheduling", problems: ["56. Merge Intervals", "57. Insert Interval", "759. Employee Free Time", "986. Interval List Intersections", "2406. Divide Intervals Into Minimum Number of Groups"] },
      { pattern: "Pattern 54: Jump Game Reachability/Minimization", problems: ["45. Jump Game II", "55. Jump Game"] },
      { pattern: "Pattern 55: Buy/Sell Stock", problems: ["121. Best Time to Buy and Sell Stock", "122. Best Time to Buy and Sell Stock II"] },
      { pattern: "Pattern 56: Gas Station Circuit", problems: ["134. Gas Station", "2202. Maximize the Topmost Element After K Moves"] },
      { pattern: "Pattern 57: Task Scheduling", problems: ["621. Task Scheduler", "767. Reorganize String", "1054. Distant Barcodes"] },
      { pattern: "Pattern 58: Sorting Based", problems: ["455. Assign Cookies", "135. Candy", "406. Queue Reconstruction by Height", "1029. Two City Scheduling"] }
    ]
  },
  {
    topic: "IX. Binary Search Patterns",
    patterns: [
      { pattern: "Pattern 59: On Sorted Array/List", problems: ["35. Search Insert Position", "69. Sqrt(x)", "74. Search a 2D Matrix", "278. First Bad Version", "374. Guess Number Higher or Lower", "540. Single Element in a Sorted Array", "704. Binary Search", "1539. Kth Missing Positive Number"] },
      { pattern: "Pattern 60: Find Min/Max in Rotated Sorted Array", problems: ["33. Search in Rotated Sorted Array", "81. Search in Rotated Sorted Array II", "153. Find Minimum in Rotated Sorted Array", "162. Find Peak Element", "852. Peak Index in a Mountain Array", "1095. Find in Mountain Array"] },
      { pattern: "Pattern 61: On Answer / Condition Function", problems: ["410. Split Array Largest Sum", "774. Minimize Max Distance to Gas Station", "875. Koko Eating Bananas", "1011. Capacity To Ship Packages Within D Days", "1482. Minimum Number of Days to Make m Bouquets", "1760. Minimum Limit of Balls in a Bag", "2064. Minimized Maximum of Products Distributed to Any Store", "2226. Maximum Candies Allocated to K Children"] },
      { pattern: "Pattern 62: Find First/Last Occurrence", problems: ["34. Find First and Last Position of Element in Sorted Array", "658. Find K Closest Elements"] },
      { pattern: "Pattern 63: Median / Kth across Two Sorted Arrays", problems: ["4. Median of Two Sorted Arrays", "719. Find K-th Smallest Pair Distance", "378. Kth Smallest Element in a Sorted Matrix"] }
    ]
  },
  {
    topic: "X. Stack Patterns",
    patterns: [
      { pattern: "Pattern 64: Valid Parentheses Matching", problems: ["20. Valid Parentheses", "32. Longest Valid Parentheses", "921. Minimum Add to Make Parentheses Valid", "1249. Minimum Remove to Make Valid Parentheses", "1963. Minimum Number of Swaps to Make the String Balanced"] },
      { pattern: "Pattern 65: Monotonic Stack", problems: ["402. Remove K Digits", "496. Next Greater Element I", "503. Next Greater Element II", "739. Daily Temperatures", "901. Online Stock Span", "907. Sum of Subarray Minimums", "962. Maximum Width Ramp", "1475. Final Prices With a Special Discount in a Shop", "1673. Find the Most Competitive Subsequence"] },
      { pattern: "Pattern 66: Expression Evaluation", problems: ["150. Evaluate Reverse Polish Notation", "224. Basic Calculator", "227. Basic Calculator II", "772. Basic Calculator III"] },
      { pattern: "Pattern 67: Simulation / Backtracking Helper", problems: ["71. Simplify Path", "394. Decode String", "735. Asteroid Collision"] },
      { pattern: "Pattern 68: Min Stack Design", problems: ["155. Min Stack", "895. Maximum Frequency Stack", "901. Online Stock Span"] },
      { pattern: "Pattern 69: Largest Rectangle in Histogram", problems: ["84. Largest Rectangle in Histogram", "85. Maximal Rectangle"] }
    ]
  },
  {
    topic: "XI. Bit Manipulation Patterns",
    patterns: [
      { pattern: "Pattern 70: Bitwise XOR - Finding Single/Missing Number", problems: ["136. Single Number", "137. Single Number II", "268. Missing Number", "389. Find the Difference"] },
      { pattern: "Pattern 71: Bitwise AND - Counting Set Bits (Hamming Weight)", problems: ["191. Number of 1 Bits", "231. Power of Two", "477. Total Hamming Distance"] },
      { pattern: "Pattern 72: Bitwise DP - Counting Bits Optimization", problems: ["338. Counting Bits", "1494. Parallel Courses II", "1442. Count Triplets That Can Form Two Arrays of Equal XOR"] },
      { pattern: "Pattern 73: Bitwise Operations - Power of Two/Four Check", problems: ["231. Power of Two", "342. Power of Four"] }
    ]
  },
  {
    topic: "XII. Linked List Manipulation Patterns",
    patterns: [
      { pattern: "Pattern 74: In-place Reversal", problems: ["83. Remove Duplicates from Sorted List", "92. Reverse Linked List II", "206. Reverse Linked List", "25. Reverse Nodes in k-Group", "234. Palindrome Linked List", "82. Remove Duplicates from Sorted List II"] },
      { pattern: "Pattern 75: Merging Two Sorted Lists", problems: ["21. Merge Two Sorted Lists", "23. Merge k Sorted Lists"] },
      { pattern: "Pattern 76: Addition of Numbers", problems: ["2. Add Two Numbers", "369. Plus One Linked List"] },
      { pattern: "Pattern 77: Intersection Detection", problems: ["160. Intersection of Two Linked Lists", "599. Minimum Index Sum of Two Lists"] },
      { pattern: "Pattern 78: Reordering / Partitioning", problems: ["24. Swap Nodes in Pairs", "61. Rotate List", "86. Partition List", "143. Reorder List", "328. Odd Even Linked List"] }
    ]
  },
  {
    topic: "XIII. Array/Matrix Manipulation Patterns",
    patterns: [
      { pattern: "Pattern 79: In-place Rotation", problems: ["48. Rotate Image", "189. Rotate Array", "867. Transpose Matrix"] },
      { pattern: "Pattern 80: Spiral Traversal", problems: ["54. Spiral Matrix", "59. Spiral Matrix II", "885. Spiral Matrix III", "2326. Spiral Matrix IV"] },
      { pattern: "Pattern 81: In-place Marking", problems: ["73. Set Matrix Zeroes", "289. Game of Life", "498. Diagonal Traverse"] },
      { pattern: "Pattern 82: Prefix/Suffix Products", problems: ["238. Product of Array Except Self", "845. Longest Mountain in Array", "2483. Minimum Penalty for a Shop"] },
      { pattern: "Pattern 83: Plus One", problems: ["66. Plus One", "43. Multiply Strings", "989. Add to Array-Form of Integer", "67. Add Binary"] },
      { pattern: "Pattern 84: In-place from End", problems: ["88. Merge Sorted Array", "977. Squares of a Sorted Array"] },
      { pattern: "Pattern 85: Cyclic Sort", problems: ["41. First Missing Positive", "268. Missing Number", "287. Find the Duplicate Number", "442. Find All Duplicates in an Array", "448. Find All Numbers Disappeared in an Array"] }
    ]
  },
  {
    topic: "XIV. String Manipulation Patterns",
    patterns: [
      { pattern: "Pattern 86: Palindrome Check", problems: ["9. Palindrome Number", "125. Valid Palindrome", "680. Valid Palindrome II"] },
      { pattern: "Pattern 87: Anagram Check", problems: ["49. Group Anagrams", "242. Valid Anagram"] },
      { pattern: "Pattern 88: Roman to Integer Conversion", problems: ["13. Roman to Integer", "12. Integer to Roman"] },
      { pattern: "Pattern 89: String to Integer (atoi)", problems: ["8. String to Integer (atoi)", "65. Valid Number"] },
      { pattern: "Pattern 90: Manual Simulation", problems: ["43. Multiply Strings", "415. Add Strings", "67. Add Binary"] },
      { pattern: "Pattern 91: String Matching - Naive / KMP / Rabin-Karp", problems: ["28. Find the Index of the First Occurrence in a String", "214. Shortest Palindrome", "686. Repeated String Match", "796. Rotate String", "3008. Find Beautiful Indices in the Given Array II"] },
      { pattern: "Pattern 92: Repeated Substring Pattern Detection", problems: ["459. Repeated Substring Pattern", "28. Find the Index of the First Occurrence in a String", "686. Repeated String Match"] }
    ]
  },
  {
    topic: "XV. Design Patterns",
    patterns: [
      { pattern: "Pattern 93: Design (General/Specific)", problems: ["146. LRU Cache", "155. Min Stack", "225. Implement Stack using Queues", "232. Implement Queue using Stacks", "251. Flatten 2D Vector", "271. Encode and Decode Strings", "295. Find Median from Data Stream", "341. Flatten Nested List Iterator", "346. Moving Average from Data Stream", "353. Design Snake Game", "359. Logger Rate Limiter", "362. Design Hit Counter", "379. Design Phone Directory", "380. Insert Delete GetRandom O(1)", "432. All O`one Data Structure", "460. LFU Cache", "604. Design Compressed String Iterator", "622. Design Circular Queue", "641. Design Circular Deque", "642. Design Search Autocomplete System", "706. Design HashMap", "715. Range Module", "900. RLE Iterator", "981. Time Based Key-Value Store", "1146. Snapshot Array", "1348. Tweet Counts Per Frequency", "1352. Product of the Last K Numbers", "1381. Design a Stack With Increment Operation", "1756. Design Most Recently Used Queue", "2013. Detect Squares", "2034. Stock Price Fluctuation", "2296. Design a Text Editor", "2336. Smallest Number in Infinite Set"] },
      { pattern: "Pattern 94: Tries", problems: ["208. Implement Trie (Prefix Tree)", "211. Design Add and Search Words Data Structure", "720. Longest Word in Dictionary", "648. Replace Words", "425. Word Squares", "642. Design Search Autocomplete System", "745. Prefix and Suffix Search"] }
    ]
  }
];