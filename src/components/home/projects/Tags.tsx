export const Tags = ({ tagsArr }: { tagsArr: string[] }) => {
  let tags: JSX.Element[] = [];
  tagsArr.forEach((e) => {
    switch (e) {
      default:
        tags.push(
          <p
            className="text-xs font-bold px-2 py-1 rounded-full bg-gray-400 text-gray-50"
            key={e}
          >
            {e}
          </p>
        );
        break;
      case "html":
        tags.push(
          <p
            className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-orange-600 to-orange-700 text-gray-50"
            key={e}
          >
            HTML
          </p>
        );
        break;
      case "js":
        tags.push(
          <p
            className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-gray-50"
            key={e}
          >
            JavaScript
          </p>
        );
        break;
      case "css":
        tags.push(
          <p
            className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 text-gray-50"
            key={e}
          >
            CSS
          </p>
        );
        break;
      case "njs":
        tags.push(
          <p
            className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-gray-50"
            key={e}
          >
            Node.js
          </p>
        );
        break;
      case "ts":
        tags.push(
          <p
            className="text-xs font-bold px-2 py-1 rounded-full bg-blue-500 text-gray-50"
            key={e}
          >
            Typescript
          </p>
        );
        break;
      case "r":
        tags.push(
          <p
            className="text-xs font-bold px-2 py-1 rounded-full bg-[#25caf3] text-gray-50"
            key={e}
          >
            React
          </p>
        );
        break;
      case "tw":
        tags.push(
          <p
            className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-cyan-600 to-teal-500 text-gray-50"
            key={e}
          >
            TailwindCSS
          </p>
        );
        break;
      case "nxjs":
        tags.push(
          <p
            className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-black to-gray-900 text-gray-50"
            key={e}
          >
            Next.js
          </p>
        );
        break;
    }
  });
  return <div className="flex flex-row gap-2">{tags}</div>;
};
