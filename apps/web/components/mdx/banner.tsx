export default function PostBanner({
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 bg-gray-100 border border-gray-300 rounded prose-p:m-0 mb-8">
      {props.children}
    </div>
  );
}
