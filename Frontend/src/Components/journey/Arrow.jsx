


// Arrow.jsx
export default function Arrow({ direction = "down" }) {
  // direction: "down" (↘︎) or "up" (↗︎)
  return (
    <div className={`traffic-arrow-wrapper  ml-45 ${direction === "up" ? "diag-up" : "diag-down"}`}>
      <svg
        width="200"
        height="60"
        viewBox="0 0 200 60"
        xmlns="http://www.w3.org/2000/svg"
        className="traffic-arrow-svg"
      >
        <g className="traffic-arrow-flow">
          {Array.from({ length: 12 }).map((_, i) => (
            <polygon
              key={i}
              points={`${i * 40},14 ${i * 40 + 20},14 ${i * 40 + 32},26 ${i * 40 + 20},38 ${i * 40},38 ${i * 40 + 12},26`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}