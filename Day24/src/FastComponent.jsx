import { memo } from "react"

function FastComponent({count}) {
    return (
        <h3 className="text-xl my-3"><strong>Memoized Component</strong> (Count : {count})</h3>
    )
}

export default memo(FastComponent);