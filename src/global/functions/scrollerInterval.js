export default function scrollerInterval({dispatch, scrollMessages, scrollerMsgIndex}){
    if (scrollerMsgIndex < scrollMessages - 1) dispatch({ type: 'next scroller msg index' })
    else dispatch({ type: 'reset scroller msg index' })
}