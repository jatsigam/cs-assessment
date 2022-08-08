|             | insert        | append      |   |   |
|-------------|---------------|-------------|---|---|
| tiny        | 78.677 μs     | 78.677 μs   |   |   |
| small       | 79.787 μs     | 142.359 μs  |   |   |
| medium      | 293.575 μs    | 230.258 μs  |   |   |
| large       | 15.879701 ms  | 846.959 μs  |   |   |
| extra large | 2.079158974 s | 7.288345 ms |   |   |

Append will scale better than the insert function as seen in our table as the increments are gradual at each time interval. The insert function increases at an increasing rate vs by a constant. Leveraging our knowledge of these built-in methods, we know that Unshift appends elements to the beginning of an array thereby alterating indices of existing elements. Push however, doesn't affect the index of existing elements as pushed elements are added to the end of the array. Thus, push() has O(1) complexity while the complexity of unshift() is O(n).
