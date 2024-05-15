interface Props {
  title: string;
}

export default function PowerBI(props: Props) {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <iframe
        className=" h-[90%] w-[90%] rounded-lg"
        title={props.title}
        width="90%"
        height="90%"
        src="https://app.powerbi.com/view?r=eyJrIjoiNWVhYTI3ZjUtYzU3Mi00MTRkLTg4MTMtZjY3OGZhMGVmNDY3IiwidCI6IjNlNTQyNjBlLTQyMGItNDgwMy1iZjlhLTVkMWEwYzgwYjUxMyJ9&pageName=ReportSection"
        allowFullScreen
      ></iframe>
    </div>
  );
}
