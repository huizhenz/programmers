const solution = (arr) => {
  const stk = [];
  let i = 0;

  // 변수 i를 만들어 초기값을 0으로 설정한 후 i가 arr의 길이보다 작으면 다음 작업을 반복합니다.
  while (i < arr.length) {
    // stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } // stk에 원소가 있고, stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 stk의 뒤에 추가하고 i에 1을 더합니다.
    else if (stk.length > 0 && stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
    } //  stk에 원소가 있는데 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 stk에서 제거합니다.
    else if (stk.length > 0 && stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    }
  }

  return stk;
};