import BigBox from "~/components/bigBox";
import SmallBox from "~/components/smallBox";

export default function Home() {
  return (
    <>
      <main>
        <div className="m-8 flex items-end gap-8">
          <SmallBox />
          <BigBox />
        </div>
      </main>
    </>
  );
}
