export default function Hero({ children }) {
    return (
        <div className="flex flex-col min-h-screen min-w-full">
            <div className="flex flex-grow flex-col justify-center items-center">
                {children}
            </div>
        </div>
    )
}