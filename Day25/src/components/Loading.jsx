export default function Loading() {
    return (
        <div className="w-sm my-6 mx-auto flex flex-col items-center gap-3">
            <div className='text-center size-20 rounded-full border-t-8 border-orange-400 animate-spin'></div>
            <p className="text-green-700 font-bold text-xl">Loading</p>
        </div>
    )
}