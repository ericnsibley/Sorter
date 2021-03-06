import { bubbleSortAnimation } from '../Sorts/bubbleSort/bubbleSortAnimation';
import { quickSortAnimation } from '../Sorts/quickSort/quickSortAnimation';
import { shellSortAnimation } from '../Sorts/shellSort/shellSortAnimation';
import { heapSortAnimation } from '../Sorts/heapSort/heapSortAnimation'; 
import { insertionSortAnimation } from '../Sorts/insertionSort/insertionSortAnimation';
import { mergeSortAnimation } from '../Sorts/mergeSort/mergeSortAnimation';
import { Animation } from '../Sorter/Sorter';

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('message', (event: MessageEvent) => {
    let tag: string = event.data[0];
    let array: number[] = event.data[1];
    let animations: Animation[];
    let sort;

    switch (tag) {

        case 'bubbleSort': 
            sort = bubbleSortAnimation;
            break;
        case 'quickSort':
            sort = quickSortAnimation;
            break;
        case 'shellSort':
            sort = shellSortAnimation;
            break;
        case 'heapSort':
            sort = heapSortAnimation;
            break;
        case 'insertionSort':
            sort = insertionSortAnimation;
            break;
        case 'mergeSort':
            sort = mergeSortAnimation;
            break;
        default:    //shouldn't ever hit this 
            console.log('The selected algorithm hasn\'t been implemented in an animation worker yet');
            console.log('Please feel free to submit a PR if you feel motivated to do so :)');
            sort = (array: number[]) => {
                return [];
            }
    }

    let time = new Date().getTime();
    animations = sort( array );
    time = new Date().getTime() - time;

    /* eslint-disable-next-line no-restricted-globals */
    self.postMessage([time, animations]);
});
