import ChartLarge from "../../ChartLarge/ChartLarge";

function Chart() {
    return (
        <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3 bg-white p-2 mt-10 ">
            <ChartLarge />
        </div>
    );
}

export default Chart;
