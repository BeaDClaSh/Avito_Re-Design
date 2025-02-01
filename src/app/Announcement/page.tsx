const version = "V.0.000.01";
const changes =[
"* init of project - now is too much easier make shopping, just use Avito Re-Design","* Maked:","-Added plans","-Added filters", "-Added Frontend of Login", "-Added Comments and for","-Added Statistic"
]


const Announcement = () => {
  return(
      <>
          <div className="text-amber-50 grid md:grid-cols-2 gap-3 sm:grid-cols-1 md:pt-12 sm:pt-16">
              <div className="pl-4 sm:p-4 md:pl-4">
<p className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl">{`Last Patch note:${version}`}</p>
                  <p className="text-amber-50 text-lg">On this version we maked a lot of things: </p>

              </div>
              <div>
              {changes.map((item, index) => (
                  <div key={index} className="p-2 my-2 rounded-md">
                      <code>{item}</code>
                  </div>
              ))}
              </div>
          </div>

      </>
  )
}
export default Announcement;