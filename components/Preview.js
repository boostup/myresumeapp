import dynamic from "next/dynamic";

function Preview({ className, data, templateName }) {
  const Template = dynamic(() => import(`../templates/${templateName}`));
  return (
    <div className={className}>
      <Template model={data} />
    </div>
  );
}

export default Preview;
