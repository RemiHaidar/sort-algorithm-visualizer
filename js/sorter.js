var nums = [];
var sortType = "Quick Sort";
var sorting = false;
var currentImplementation = "C++";

window.onload = initLines;
window.onresize = initLines;

function initLines()
{
    sorting = false;
    nums = [];
    // Width of container of bars
    let numberDisplayWidth = window.innerWidth * 0.8;
    // Total number of required bars
    let numOfBars = 150;
    // Width of one bar
    let barWidth = numberDisplayWidth / 150;

    document.getElementById("button1").textContent = "Sort";

    while (nums.length < numOfBars) {
        let id = Math.floor(Math.random() * (numOfBars + 1));
        if (nums.indexOf(id) == -1 && id != 0) {
            nums.push(id);
        }
    }

    document.getElementById("numbars").innerHTML = "";
    for (let i = 0; i < nums.length; i++) {
        let line = '<div  id="' + nums[i] + '" class="vertical-line" style="height: ' + nums[i] / 2.4 + 'vh; width: ' + barWidth + 'px;"></div>';
        document.getElementById("numbars").innerHTML += line;
    }

    descriptionHandler();
}

function setSortType(sort)
{
    sortType = sort + " Sort";
    document.getElementById("sort").innerText = (sort + " Sort");

    initLines();
    descriptionHandler();
}

function sortHandler()
{
    if (sorting) {
        sorting = false;
        document.getElementById("button1").textContent = "Sort";
        return;
    }
    else {
        sorting = true;
        document.getElementById("button1").textContent = "Stop";
    }

    switch (sortType) {
        case "Bubble Sort":
            bubbleSort();
            break;

        case "Selection Sort":
            selectionSort();
            break;

        case "Insertion Sort":
            insertionSort();
            break;

        case "Gnome Sort":
            gnomeSort();
            break;

        case "Shaker Sort":
            shakerSort();
            break;

        case "Odd Even Sort":
            oddEvenSort();
            break;

        case "Pancake Sort":
            pancakeSort();
            break;

        case "Quick Sort":
            quickSort(nums);
            break;

        case "Merge Sort":
            let temp = nums;
            nums = mergeSort(temp);
            break;

        default:
            break;
    }
}

function description(bCase, aCase, wCase, sComp, desc, cCode, pCode)
{
    let code = '<div class="container-lg" style="margin-top: 3vh; margin-bottom: 20vh;"><div class="row"><div class="col-sm"><table class="table table-dark table-striped table-bordered table-hover"><th colspan="2" class="table-active"><center>Time Complexity</center></th><tbody><tr><th scope="row">Best Case</th><th>' + bCase + '</th></tr><tr><th scope="row">Average Case</th><th>' + aCase + '</th></tr><tr><th scope="row">Worst Case</th><th>' + wCase + '</th></tr><th colspan="2" class="table-active"><center>Space Complexity</center></th><tr><th scope="row">Space Complexity</th><th>' + sComp + '</th></tr><th colspan="2" class="table-active"><center>Description</center></th><tr><td colspan="2">' + desc + '</td></tr></tbody></table></div><div class="col-sm" ><div class="card text"><div class="card-header"><ul class="nav nav-tabs card-header-tabs"><li class="nav-item"><button class="nav-link active" id="c++" onclick="implementationHandler()">C++</button></li><li class="nav-item"><button class="nav-link" id="python" onclick="implementationHandler()">Python</button></li></ul></div><div class="card-body"><pre id="cImplementation">' + cCode + '</pre><pre id="pImplementation" style="visibility: hidden; display : none">' + pCode + '</pre></div></div></div></div></div>';
    return code;
}

function descriptionHandler()
{
    switch (sortType) {
        case "Bubble Sort":
            document.getElementById("description").innerHTML = description(
                "O (n × log n)", 
                "O (n × log n)",
                "O (n<sup>2</sup>)",
                "O (n)", 
                "The bubble sort is a quadratic sorting algorithm. It is based on the comparison of all adjacent elements which are swapped if they are not in order. It is not efficient for large sets of data.", 
                "void bubbleSort(std::vector&lt;int&gt;& array) {\n\tfor (int i = 0; i < array.size(); i++) {\n\t\tfor (int j = i + 1; j < array.size(); j++) {\n\t\t\tif (array[i] > array[j]) {\n\t\t\t\tint temp = array[i];\n\t\t\t\tarray[i] = array[j];\n\t\t\t\tarray[j] = temp;\n\t\t\t}\n\t\t}\n\t}\n}\n",
                "def bubbleSort(array):\n\tlength = len(array)\n\tfor i in range(length-1):\n\t\tfor j in range(0, length-i-1):\n\t\t\tif array[j] > array[j+1]:\n\t\t\t\tarr[j], array[j+1] = array[j+1], array[j]\n\n\n"
            );
            break;

        case "Selection Sort":
            document.getElementById("description").innerHTML = description(
                "O (n<sup>2</sup>)", 
                "O (n<sup>2</sup>)",
                "O (n<sup>2</sup>)",
                "O (1)", 
                "The selection sort is a quadratic sorting algorithm. It is based on the placement of the smallest or biggest element at the beginning of the array. It is not efficient for large sets of data.", 
                "void selectionSort(std::vector&lt;int&gt;& array) {\n\tint min_index;\n\tfor (int i = 0; i < array.size() - 1; i++) {\n\t\tmin_index = i;\n\t\tfor (int j = i + 1; j < array.size(); j++) {\n\t\t\tif (array[j] < array[min_index]) {\n\t\t\t\tmin_index = j;\n\t\t\t}\n\n\t\t\tint temp = array[min_index];\n\t\t\tarray[min_index] = array[i];\n\t\t\tarray[i] = temp;\n\t\t}\n\t}\n}\n",
                "def selectionSort(array):\n\tlength = len(array)\n\tfor i in range(length):\n\t\tmin_index = i\n\t\tfor j in range(i + 1, length):\n\t\t\tif array[min_index] > array[j]:\n\t\t\t\tarr[i], array[min_index] = array[min_index], array[i]\n\n\n"
            );
            break;

        case "Insertion Sort":
            document.getElementById("description").innerHTML = description(
                "O (n)", 
                "O (n<sup>2</sup>)",
                "O (n<sup>2</sup>)",
                "O (1)", 
                "The insertion sort is a quadratic sorting algorithm. It virtually splits the array into a into two sublists : a sorted one and an unsorted one. The algorithm takes an element from the unsorted list and correctly places it in the other list. It  is not efficient for large sets of data.", 
                "void insertionSort(std::vector&lt;int&gt;& array) {\n\tint key, j;\n\tfor (int i = 1; i < array.size(); i++) {\n\t\tkey = array[i];\n\t\tj = i - 1;\n\t\twhile (j >= 0 && array[j] > key) {\n\t\t\tarray[j + 1] = array[j];\n\t\t\tj -= 1;\n\t\t}\n\t\tarray[j + 1] = key;\n\t}\n}\n",
                "def inertionSort(array):\n\tlength = len(array)\n\tfor i in range(1, length):\n\t\tkey = array[i]\n\t\tj = i - 1\n\t\twhile j >= 0 and key < array[j]:\n\t\t\tarray[j + 1] = array[j]\n\t\t\tj -= 1\n\t\tarray[j + 1] = key\n\n"
            );
            break;

        case "Gnome Sort":
            document.getElementById("description").innerHTML = description(
                "O (n)",
                "O (n<sup>2</sup>)",
                "O (n<sup>2</sup>)",
                "O (1)",
                "The gnome sort is a quadratic sorting algorithm. It is based on the way a garden gnome sorts his flower pots and is similar to the insertion sort. The algorithm compares adjacent elements and advances if they are in order or retreats if they are not.",
                "void gnomeSort(std::vector&lt;int&gt;& array) { \n\tint index = 0;\n\twhile (index < array.size()) {\n\t\tif (index == 0)\n\t\t\tindex++;\n\t\tif (array[index] >= array[index - 1])\n\t\t\tindex++;\n\t\telse {\n\t\t\tint temp = array[index];\n\t\t\tarray[index] = array[index - 1];\n\t\t\tarray[index - 1] = temp;\n\t\t}\n\t}\n}",
                "def gnomeSort(array):\n\tlength = len(array)\n\tindex = 0\n\twhile index < length:\n\t\tif index == 0:\n\t\t\tindex = index + 1\n\t\tif array[index] >= array[index - 1]:\n\t\t\tindex = index + 1\n\t\telse:\n\t\t\tarr[index], array[index-1] = array[index-1], array[index]\n\t\t\tindex = index - 1\n"
            );
            break;

        case "Shaker Sort":
            document.getElementById("description").innerHTML = description(
                "O (n)",
                "O (n<sup>2</sup>)",
                "O (n<sup>2</sup>)",
                "O (1)",
                "The shaker sort is a quadratic sorting algorithm. It is an extension of the bubble sort. In fact, it does not only take the bigger elements to the end of the list but also alternates by bringing the smaller elements to the beginning of the list.",
                "void shakerSort(std::vector&lt;int&gt;& array) {\n\tbool sorted = true;\n\twhile (sorted) {\n\t\tfor (int i = 0; i< array.size() - 1; i++) {\n\t\t\tif (array[i] > array[i + 1]) {\n\t\t\t\tint temp = array[i];\n\t\t\t\tarray[i] = array[i + 1];\n\t\t\t\tarray[i+1] = temp;\n\t\t\t\tsorted = true;\n\t\t\t}\n\t\t}\n\t\tif (!sorted)\n\t\t\tbreak;\n\t\tsorted = false;\n\t\tfor (int j = array.size() - 1; j > 0; j--) {\n\t\t\tif (array[j-1] > array[j]) {\n\t\t\t\tint temp = array[j];\n\t\t\t\tarray[j] = array[j - 1];\n\t\t\t\tarray[j - 1] = temp;\n\t\t\t\tsorted = true;\n\t\t\t}\n\t\t}\n\t}\n}\n",
                "def cocktailSort(array):\n\tn = len(array)\tswapped = True\n\tstart = 0\n\tend = n-1\n\twhile (swapped == True):\n\t\tswapped = False\n\t\t\tif (array[i] > array[i + 1]):\n\t\tfor i in range(start, end):\n\t\t\t\tarray[i], array[i + 1] = array[i + 1], array[i]\n\t\t\t\tswapped = True\n\t\tif (swapped == False):\n\t\t\tbreak\n\t\tswapped = False\n\t\tend = end-1\n\t\tfor i in range(end-1, start-1, -1):\n\t\t\tif (array[i] > array[i + 1]):\n\t\t\t\tarray[i], array[i + 1] = array[i + 1], a[i]\n\t\t\t\tswapped = True\n\n\t\tstart = start + 1\n"
            );
            break;

        case "Odd Even Sort":
            document.getElementById("description").innerHTML = description(
                "O (n)",
                "O (n<sup>2</sup>)",
                "O (n<sup>2</sup>)",
                "O (1)",
                "The odd even sort is a quadratic sorting algorithm. It is similar to the bubble sort because it compares adjacent elements and puts them in order. However it does this by alternating between odd and even indices until the list is in order.",
"void oddEvenSort(std::vector&lt;int&gt;& array) {\n\
    bool sorted = false;\n\
    while (!sorted) {\n\
        sorted = true;\n\
        for (int i = 1; i < array.size() - 1; i += 2) {\n\
            if (array[i] > array[i+1]) {\n\
                int temp = array[i];\n\
                array[i] = array[i+1];\n\
                array[i+1] = temp;\n\
                sorted = false;\n\
            }\n\
        }\n\
        for (int i = 0; i < array.size() - 1; i += 2) {\n\
            if (array[i] > array[i+1]) {\n\
                int temp = array[i];\n\
                array[i] = array[i+1];\n\
                array[i+1] = temp;\n\
                sorted = false;\n\
            }\n\
        }\n\
    }\n\
}",
"def odd_even_sort(array):\n\
    sorted = False\n\
    while not sorted:\n\
        sorted = True\n\
        for i in range(1, len(array)-1, 2):\n\
            if array[i] > array[i+1]:\n\
                array[i], array[i+1] = array[i+1], array[i]\n\
                sorted = False\n\
        for i in range(0, len(array)-1, 2):\n\
            if array[i] > array[i+1]:\n\
                array[i], array[i+1] = array[i+1], array[i]\n\
                sorted = False"
            );
            break;

        case "Pancake Sort":
            document.getElementById("description").innerHTML = description(
                "O (n<sup>2</sup>)",
                "O (n<sup>2</sup>)",
                "O (n<sup>2</sup>)",
                "O (1)",
            "The pancake sort is a quadratic sorting algorithm. It derives from the pancake problem which flips the set of data until it is sorted. For each flip the biggest elements of the unsorted list get put at the end of the list.",
"void flip(std::vector&lt;int&gt;& array, int limit) {\n\
    int left = 0;\n\
    while (left < limit) {\n\
        int temp = array[left];\n\
        array[left] = array[limit];\n\
        array[limit] = temp;\n\
        limit--;\n\
        left++;\n\
    }\n\
}\n\
\n\
int maxIndex(std::vector&lt;int&gt;& array, int limit) {\n\
    int index = 0;\n\
    for (int i = 0; i < limit; i++) {\n\
        if (array[i] > array[index]) {\n\
            index = i;\n\
        }\n\
    }\n\
    return index;\n\
}\n\
\n\
void pancakeSort(std::vector&lt;int&gt;& array, int n) {\n\
    int maxdex;\n\
    while (n > 1) {\n\
        maxdex = maxIndex(array, n);\n\
        if (maxdex != n) {\n\
            flip(array, maxdex);\n\
            flip(array, n-1);\n\
        }\n\
        n--;\n\
    }\n\
}",
"def flip(arr, k):\n\
    left = 0\n\
    while left < k:\n\
        arr[left], arr[k] = arr[k], arr[left]\n\
        k -= 1\n\
        left += 1\n\
\n\
def max_index(arr, k):\n\
    index = 0\n\
    for i in range(k):\n\
        if arr[i] > arr[index]:\n\
        index = i\n\
    return index\n\
\n\
def pancake_sort(arr):\n\
    n = len(arr)\n\
    while n > 1:\n\
        maxdex = max_index(arr, n)\n\
        if maxdex != n:\n\
        flip(arr, maxdex)\n\
        flip(arr, n - 1)\n\
        n -= 1\n"
            )
            break;

        case "Quick Sort":
            document.getElementById("description").innerHTML = description(
                "O (n × log n)",
                "O (n × log n)",
                "O (n<sup>2</sup>)",
                "O (n)",
                "The quick sort is a logarithmic sorting algorithm. It is based on splitting the list into smaller sublists/partitions and sorting them recursively until the data structure is sorted. The array is divided according to a key element called the pivot. Any element bigger than the pivot is placed to the right and oppositely for the left.",
"int partition (std::vector<int> array, int low, int high)\n\
{\n\
    int pivot = array[high];\n\
    int i = (low - 1);\n\
\n\
    for (int j = low; j <= high- 1; j++)\n\
    {\n\
        if (array[j] <= pivot)\n\
        {\n\
            i++;\n\
	    int temp = array[i];\n\
            array[i] = array[j];\n\
            array[j] = temp;\n\
        }\n\
    }\n\
    int temp = array[i + 1];\n\
    array[i + 1] = array[high];\n\
    array[high] = temp;\n\
    return (i + 1);\n\
}\n\
\n\
void quickSort(int array[], int low, int high)\n\
{\n\
    if (low < high)\n\
    {\n\
        int pivot = partition(array, low, high);\n\
\n\
        quickSort(array, low, pivot - 1);\n\
        quickSort(array, pivot + 1, high);\n\
    }\n\
}\n",
"def partition(array, start, end):\n\
    pivot = array[start]\n\
    low = start + 1\n\
    high = end\n\
\n\
    while True:\n\
        while low <= high and array[high] >= pivot:\n\
            high = high - 1\n\
\n\
        while low <= high and array[low] <= pivot:\n\
            low = low + 1\n\
\n\
        if low <= high:\n\
            array[low], array[high] = array[high], array[low]\n\
        else:\n\
            break\n\
\n\
    array[start], array[high] = array[high], array[start]\n\
\n\
    return high\n\
\n\
def quick_sort(array, start, end):\n\
    if start >= end:\n\
        return\n\
\n\
    p = partition(array, start, end)\n\
    quick_sort(array, start, p-1)\n\
    quick_sort(array, p+1, end)\n"
            )
            break;

        default:
            document.getElementById("description").innerHTML = "";
            break;
    }
}

function implementationHandler()
{
    if (currentImplementation == "C++") {
        document.getElementById("c++").className = "nav-link";
        document.getElementById("python").className = "nav-link active";

        document.getElementById("cImplementation").style.visibility = "hidden";
        document.getElementById("pImplementation").style.visibility = "visible";

        document.getElementById("cImplementation").style.display = "none";
        document.getElementById("pImplementation").style.display = "block";

        currentImplementation = "Python";
    }
    else {
        document.getElementById("c++").className = "nav-link active";
        document.getElementById("python").className = "nav-link";

        document.getElementById("cImplementation").style.visibility = "visible";
        document.getElementById("pImplementation").style.visibility = "hidden";

        document.getElementById("cImplementation").style.display = "block";
        document.getElementById("pImplementation").style.display = "none";

        currentImplementation = "C++";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// -------------------------
//   *  Sort Algorithms  *  
// -------------------------

async function bubbleSort()
{
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < ( nums.length - i -1 ); j++) {
            if (sorting) {
                if(nums[j] > nums[j+1]) {
                    document.getElementById(nums[j + 1]).id = nums[j];
                    document.getElementById(nums[j]).id = nums[j + 1];
                    document.getElementById(nums[j]).style.height = nums[j] / 2.4 + "vh";
                    document.getElementById(nums[j + 1]).style.height = nums[j + 1] / 2.4 + "vh";
                    let temp = nums[j]
                    nums[j] = nums[j + 1]
                    nums[j+1] = temp
                    await sleep(2);
                }
            }
            else return;
        }
    }
    document.getElementById("button1").textContent = "Sort";
}

async function selectionSort()
{
    for (let i = 0; i < nums.length - 1; i++) {
        let index = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[index]) {
                index = j;
            }
        } 
        
        if (sorting) {
            document.getElementById(nums[index]).id = nums[i];
            document.getElementById(nums[i]).id = nums[index];
            document.getElementById(nums[index]).style.height = nums[index] / 2.4 + "vh";
            document.getElementById(nums[i]).style.height = nums[i] / 2.4 + "vh";
            let temp = nums[index];
            nums[index] = nums[i];
            nums[i] = temp;
            await sleep(20);
        }
        else return;
    }

    document.getElementById("button1").textContent = "Sort";
}

async function insertionSort()
{
    let key, j;
    for (let i = 1; i < nums.length; i++) {
        if (sorting) {
            key = nums[i];
            j = i - 1;
            
            while (j >= 0 && nums[j] > key)
            {
                if (sorting) {
                    document.getElementById(nums[j + 1]).style.height = nums[j] / 2.4 + "vh";
                    document.getElementById(nums[j + 1]).id = nums[j];
                    nums[j + 1] = nums[j];
                    j -= 1;
                    await sleep(1);
                }
                else return;
            }
            document.getElementById(nums[j + 1]).style.height = key / 2.4 + "vh";
            document.getElementById(nums[j + 1]).id = key;
            nums[j + 1] = key;
        }
        else return;
    }

    document.getElementById("button1").textContent = "Sort";
}

async function gnomeSort()
{
    let index = 0;
    while (index < nums.length) {
        if (sorting) {
            if (index == 0) {
                index++;
            }
            if (nums[index] >= nums[index - 1]){
                index++;
                await sleep(2);
            }
            else {
                document.getElementById(nums[index]).id = nums[index - 1];
                document.getElementById(nums[index - 1]).id = nums[index];
                document.getElementById(nums[index]).style.height = nums[index] / 2.4 + "vh";
                document.getElementById(nums[index - 1]).style.height = nums[index - 1] / 2.4 + "vh";
                let temp = nums[index];
                nums[index] = nums[index - 1];
                nums[index - 1] = temp;
                index--;
                await sleep(2);
            }
        }
        else return;
    }
    document.getElementById("button1").textContent = "Sort";
}

async function shakerSort()
{
    let sorted = true;
    while (sorted) {
            for (let i = 0; i < nums.length - 1; i++) {
                if (sorting) {
                    if (nums[i] > nums[i + 1]) {
                        document.getElementById(nums[i + 1]).id = nums[i];
                        document.getElementById(nums[i]).id = nums[i + 1];
                        let temp = nums[i];
                        nums[i] = nums[i + 1];
                        nums[i + 1] = temp;
                        document.getElementById(nums[i]).style.height = nums[i] / 2.4 + "vh";
                        document.getElementById(nums[i + 1]).style.height = nums[i + 1] / 2.4 + "vh";
                        sorted = true;
                        await sleep(2);
                    }
                }
                else return;
            }

            if (!sorted)
                break;

            sorted = false;

            for (let j = nums.length - 1; j > 0; j--) {
                if (sorting) {
                    if (nums[j-1] > nums[j]) {
                        document.getElementById(nums[j]).id = nums[j - 1];
                        document.getElementById(nums[j - 1]).id = nums[j];
                        let temp = nums[j];
                        nums[j] = nums[j - 1];
                        nums[j - 1] = temp;
                        document.getElementById(nums[j]).style.height = nums[j] / 2.4 + "vh";
                        document.getElementById(nums[j - 1]).style.height = nums[j - 1] / 2.4 + "vh";
                        sorted = true;
                        await sleep(2);
                    }
                }
                else return;
            }
    }
    document.getElementById("button1").textContent = "Sort";
}

async function oddEvenSort() {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 1; i < nums.length - 1; i += 2) {
            if (sorting) {
                if (nums[i] > nums[i+1]) {
                    document.getElementById(nums[i + 1]).id = nums[i];
                    document.getElementById(nums[i]).id = nums[i + 1];
                    [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
                    sorted = false;
                    document.getElementById(nums[i]).style.height = nums[i] / 2.4 + "vh";
                    document.getElementById(nums[i + 1]).style.height = nums[i + 1] / 2.4 + "vh";
                    await sleep(2);
                }
            }
        }

        for (let i = 0; i < nums.length - 1; i += 2) {
            if (sorting) {
                if (nums[i] > nums[i+1]) {
                    document.getElementById(nums[i + 1]).id = nums[i];
                    document.getElementById(nums[i]).id = nums[i + 1];
                    [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
                    sorted = false;
                    document.getElementById(nums[i]).style.height = nums[i] / 2.4 + "vh";
                    document.getElementById(nums[i + 1]).style.height = nums[i + 1] / 2.4 + "vh";
                    await sleep(2);
                }
            }
        }
    }
    document.getElementById("button1").textContent = "Sort";
}

// Pancake sort

async function flip(limit) {
    let left = 0;
    while (left < limit) {
        if (sorting) {
            document.getElementById(nums[limit]).id = nums[left];
            document.getElementById(nums[left]).id = nums[limit];
            document.getElementById(nums[left]).style.height = nums[left] / 2.4 + "vh";
            document.getElementById(nums[limit]).style.height = nums[limit] / 2.4 + "vh";
            [nums[left], nums[limit]] = [nums[limit], nums[left]];
            await sleep(2);
            limit--;
            left++;
        }
        else return;
    }
}

function max_index(limit) {
    let index = 0;
    for (let i = 0; i < limit; i++) {
        if (nums[i] > nums[index]) {
            index = i;
        }
    }
    return index;
}

async function pancakeSort() {
    let n = nums.length;
    while (n > 1) {
        let maxdex = max_index(n);
        if (maxdex != n) {
            await flip(maxdex);
            await flip(n-1);
        }
        n--;
    }

    document.getElementById("button1").textContent = "Sort";
}

//

async function quickSort(array, start, end) {
    if (start === undefined) {
        start = 0;
        end = array.length - 1;
    } 
    else if (start >= end) {
        return array;
    }

    let rStart = start, rEnd = end;
    // Using a random element as pivot
    let pivot = array[Math.floor(Math.random() * (end - start + 1) + start)];

    while (start < end) {
        while (array[start] <= pivot) start++;
        while (array[end] > pivot) end--;
        if (sorting) {
            if (start < end) {
                document.getElementById(array[end]).id = array[start];
                document.getElementById(array[start]).id = array[end];
                document.getElementById(array[start]).style.height = array[start] / 2.4 + "vh";
                document.getElementById(array[end]).style.height = array[end] / 2.4 + "vh";

                let temp = array[start];
                array[start] = array[end];
                array[end] = temp;

                await sleep(20);
            }
        }
        else return;
    }
    
    await quickSort(array, rStart, start - 1);
    await quickSort(array, start, rEnd);

    let sorted = true;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            sorted = false;
        }
    }

    if (sorted) {
        document.getElementById("button1").textContent = "Sort";
    }
}

// !

function mergeSort(arr) {
    const half = arr.length / 2
  
    if (arr.length < 2){
      return arr
    }
  
    const left = arr.splice(0, half)
    return merge(mergeSort(left),mergeSort(arr))
  }
  
function merge(left, right) {
    let arr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } 
        else {
            arr.push(right.shift())
        }
    }

    return [ ...arr, ...left, ...right ]
}