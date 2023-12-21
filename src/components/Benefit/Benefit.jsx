

const Benefit = () => {
  return (
    <div className="bg-white p-8 my-20">
        <h2 className="text-2xl font-bold mb-12 text-center">Who Can Benefit?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-gray-200 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Developers</h3>
            <p className="text-gray-700">
              Enhance project management, organize tasks, and collaborate seamlessly within your development team.
            </p>
          </div>
          
          <div className="bg-gray-200 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2 tex">Corporate Professionals</h3>
            <p className="text-gray-700">
              Manage and prioritize tasks, track project timelines, and improve team productivity in a corporate setting.
            </p>
          </div>

          <div className="bg-gray-200 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Bankers</h3>
            <p className="text-gray-700">
              Streamline workflow, manage client interactions, and enhance task organization for banking professionals.
            </p>
          </div>
        </div>
      </div>
  )
}

export default Benefit