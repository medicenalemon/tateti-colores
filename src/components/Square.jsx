export default function Square({ value, onClick }) {
    const color = value === "R" ? "bg-red-600" : value === "G" ? "bg-lime-500" : "bg-white";
    return (
       <button onClick={onClick} className={`aspect-square w-full text-2xl border border-black ${color} hover:opacity-80`}/>
        /* <button 
            onClick={onClick}
            style={{ 
                width: "80px",
                height: "80px",
                fontSize: "2rem",
                backgroundColor: value === "R" ? "#ff0000" : value === "G" ? "#00ff00" : "white",
                border: "1px solid #000000",
            }}
        />*/
    );
}