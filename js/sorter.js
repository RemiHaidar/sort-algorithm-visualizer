let nums = [];
let sortType = "Quick Sort";
let sorting = false;
let currentImplementation = "C++";
let numOfBars = 150;
let heightFactor = numOfBars / 65;

window.onload = initLines;
window.onresize = initLines;

function setSliderValue()
{
    var slider = document.getElementById("numberSlider");
    numOfBars = parseInt(slider.value);
    slider.title = slider.value;
}

function initLines()
{
    var slider = document.getElementById("numberSlider");
    numOfBars = parseInt(slider.value);
    slider.title = slider.value;
    heightFactor = numOfBars / 65;

    sorting = false;
    nums = [];
    
    // Width of container of bars
    let numberDisplayWidth = window.innerWidth * 0.8;
    // Width of one bar
    let barWidth = numberDisplayWidth / numOfBars;

    document.getElementById("button1").textContent = "Sort";

    while (nums.length < numOfBars) {
        let id = Math.floor(Math.random() * (numOfBars + 1));
        if (nums.indexOf(id) == -1 && id != 0) {
            nums.push(id);
        }
    }

    document.getElementById("numbars").innerHTML = "";
    for (let i = 0; i < nums.length; i++) {
        let line = '<div  id="' + nums[i] + '" class="vertical-line" style="height: ' + nums[i] / heightFactor + 'vh; width: ' + barWidth + 'px;" data-bs-toggle="tooltip" data-bs-placement="top" title="' + nums[i] + '"></div>';
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

        case "Bogo Sort":
            bogoSort();
            break;

        case "Comb Sort":
            combSort();
            break;

        default:
            break;
    }
}

function description(bCase, aCase, wCase, sComp, desc)
{
    let complexity_table = '<div style="width: 80%; margin-top: 3vh;" class="container-fluid"><div class="row"><div class="col-sm"><table class="table table-dark table-striped table-bordered table-hover shadow-lg" style="table-layout: fixed;"><th colspan="2" class="table-active"><center><h4>Time Complexity</h4></center></th><tbody><tr><th>Best Case</th><th>' + bCase + '</th></tr><tr><th>Average Case</th><th>' + aCase + '</th></tr><tr><th>Worst Case</th><th>' + wCase + '</th></tr><th colspan="2" class="table-active"><center><h4>Space Complexity</h4></center></th><tr><th>Space Complexity</th><th>' + sComp + '</th></tr></tbody></table></div>';
    let d = '<div class="col-sm"><div class="card shadow-lg"><div class="card-body"><center><h3 class="card-title">Description</h3></center><h5><p class="card-text">' + desc + '</p></h5></div></div></div></div></div>';
    let code = complexity_table + d;
    return code;
}

function descriptionHandler()
{
    switch (sortType) {
        case "Bubble Sort":
            document.getElementById("description").innerHTML = description(
                "O (n ?? log n)", 
                "O (n ?? log n)",
                "O (n<sup>2</sup>)",
                "O (n)", 
                "The bubble sort is a quadratic sorting algorithm. It is based on the comparison of all adjacent elements which are swapped if they are not in order. It is not efficient for large sets of data."
            );
            break;

        case "Selection Sort":
            document.getElementById("description").innerHTML = description(
                "O (n<sup>2</sup>)", 
                "O (n<sup>2</sup>)",
                "O (n<sup>2</sup>)",
                "O (1)", 
                "The selection sort is a quadratic sorting algorithm. It is based on the placement of the smallest or biggest element at the beginning of the array. It is not efficient for large sets of data."
            );
            break;

        case "Insertion Sort":
            document.getElementById("description").innerHTML = description(
                "O (n)", 
                "O (n<sup>2</sup>)",
                "O (n<sup>2</sup>)",
                "O (1)", 
                "The insertion sort is a quadratic sorting algorithm. It virtually splits the array leto a leto two sublists : a sorted one and an unsorted one. The algorithm takes an element from the unsorted list and correctly places it in the other list. It  is not efficient for large sets of data."
            );
            break;

        case "Gnome Sort":
            document.getElementById("description").innerHTML = description(
                "O (n)",
                "O (n<sup>2</sup>)",
                "O (n<sup>2</sup>)",
                "O (1)",
                "The gnome sort is a quadratic sorting algorithm. It is based on the way a garden gnome sorts his flower pots and is similar to the insertion sort. The algorithm compares adjacent elements and advances if they are in order or retreats if they are not."
            );
            break;

        case "Shaker Sort":
            document.getElementById("description").innerHTML = description(
                "O (n)",
                "O (n<sup>2</sup>)",
                "O (n<sup>2</sup>)",
                "O (1)",
                "The shaker sort is a quadratic sorting algorithm. It is an extension of the bubble sort. In fact, it does not only take the bigger elements to the end of the list but also alternates by bringing the smaller elements to the beginning of the list."
            );
            break;

        case "Odd Even Sort":
            document.getElementById("description").innerHTML = description(
                "O (n)",
                "O (n<sup>2</sup>)",
                "O (n<sup>2</sup>)",
                "O (1)",
                "The odd even sort is a quadratic sorting algorithm. It is similar to the bubble sort because it compares adjacent elements and puts them in order. However it does this by alternating between odd and even indices until the list is in order."
            );
            break;

        case "Pancake Sort":
            document.getElementById("description").innerHTML = description(
                "O (n<sup>2</sup>)",
                "O (n<sup>2</sup>)",
                "O (n<sup>2</sup>)",
                "O (1)",
            "The pancake sort is a quadratic sorting algorithm. It derives from the pancake problem which flips the set of data until it is sorted. For each flip the biggest elements of the unsorted list get put at the end of the list."
            );
            break;

        case "Quick Sort":
            document.getElementById("description").innerHTML = description(
                "O (n ?? log n)",
                "O (n ?? log n)",
                "O (n<sup>2</sup>)",
                "O (n)",
                "The quick sort is a logarithmic sorting algorithm. It is based on splitting the list leto smaller sublists/partitions and sorting them recursively until the data structure is sorted. The array is divided according to a key element called the pivot. Any element bigger than the pivot is placed to the right and oppositely for the left."
            );
            break;

        case "Bogo Sort":
            document.getElementById("description").innerHTML = description(
                "O (n)",
                "O (n &#215; n!)",
                "&infin;",
                "O (n)",
                "The bogo sort is a particularly ineffective algorithm based on generate and test paradigm. The algorithm successively generates permutations of its input until it finds one that is sorted. It can be compared to throwing a mixed packet of cards in the air and picking it back up until the deck is sorted."
            )
            break;

        case "Comb Sort":
            document.getElementById("description").innerHTML = description(
                
            )
            break;

        default:
            document.getElementById("description").innerHTML = "<center>This algorithm has not been added yet.</center>";
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

function swap(index1, index2)
{
    if (index1 > index2) {
        document.getElementById(nums[index2]).title = nums[index1];
        document.getElementById(nums[index1]).title = nums[index2];
        document.getElementById(nums[index1]).id = nums[index2];
        document.getElementById(nums[index2]).id = nums[index1];
        document.getElementById(nums[index2]).style.height = nums[index2] / heightFactor + "vh";
        document.getElementById(nums[index1]).style.height = nums[index1] / heightFactor + "vh";
    }
    else {
        document.getElementById(nums[index1]).title = nums[index2];
        document.getElementById(nums[index2]).title = nums[index1];
        document.getElementById(nums[index2]).id = nums[index1];
        document.getElementById(nums[index1]).id = nums[index2];
        document.getElementById(nums[index1]).style.height = nums[index1] / heightFactor + "vh";
        document.getElementById(nums[index2]).style.height = nums[index2] / heightFactor + "vh";
    }

    let temp = nums[index1]
    nums[index1] = nums[index2]
    nums[index2] = temp
}

// -------------------------
//   *  Sort Algorithms  *  
// -------------------------

async function bubbleSort()
{
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < ( nums.length - i -1 ); j++) {
            if (sorting) {
                if(nums[j] > nums[j+1]) {
                    swap(j, j + 1);
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
            swap(index, i);
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
                    document.getElementById(nums[j + 1]).style.height = nums[j] / heightFactor + "vh";
                    document.getElementById(nums[j + 1]).id = nums[j];
                    nums[j + 1] = nums[j];
                    j -= 1;
                    await sleep(1);
                }
                else return;
            }
            document.getElementById(nums[j + 1]).style.height = key / heightFactor + "vh";
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
                swap(index, index - 1);
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
                        swap(i + 1, i);
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
                        swap(j, j - 1);
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
                    swap(i + 1, i);
                    sorted = false;
                    await sleep(2);
                }
            }
        }

        for (let i = 0; i < nums.length - 1; i += 2) {
            if (sorting) {
                if (nums[i] > nums[i+1]) {
                    swap(i + 1, i);
                    sorted = false;
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
            swap(limit, left);
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
                swap(end, start);
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

function isSorted() {
    for(let i = 1; i < nums.length; i++){
        if (nums[i-1] > nums[i]) {
            return false;
        }
    }
    return true;
}

async function shuffle() {
    let count = nums.length;
    while(count > 0) {
        if (sorting) {
            let index = Math.floor(Math.random() * count);
            count--;

            // Avoid swapping the same index
            if (count != index) {
                if (count < index) {
                    swap(index, count);
                }
                else {
                    swap(index, count);
                }
            }

            await sleep(20);
        }
        else return;
    }
}

async function bogoSort()
{
    let sorted = false;
    while(!isSorted(nums)) {
        await shuffle();

        if (!sorting)
            return;
    }

    document.getElementById("button1").textContent = "Sort";
}

async function combSort()
{
    let length = nums.length;
    let shrink = 1.3;
    let gap = length;
    let sorted = false;

    while (!sorted) {
        gap = parseInt(gap / shrink);
        if (gap <= 1) {
            sorted = true;
            gap = 1;
        }

        for (let i = 0; i < length - gap; i++) {
            if (sorting) {
                if (nums[i] > nums[gap + i]) {
                    swap(gap + i, i);
                    sorted = false;
                    await sleep(20);
                }
            }
        }
    }

    document.getElementById("button1").textContent = "Sort";
}