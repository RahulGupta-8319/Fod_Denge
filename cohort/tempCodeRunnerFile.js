  while(s<e){
        mid = Math.floor((s+e)/2)

        if(arr[mid] == target){
            s = mid
            b=mid
            // console.log(a);
        }
        else if(arr[mid]>target){
            e=mid-1
        }else{
            s=mid+1
            
        }
    }