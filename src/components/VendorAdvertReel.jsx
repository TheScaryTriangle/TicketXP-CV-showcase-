/**
 * @dev This is the reel of advertised venues for the homepage
 * @param vendorData The array of data returned from the parent component
 */
const VendorAdvertReel = ({ vendorData }) => {
    return (
        <div>
            <h1>Vendors</h1>
            <div className="vendor-list">
                {vendorData.map((vendor, index) => (
                    <VendorDisplayBox
                        _id={vendor._id}
                        VendorName={vendor.VendorName}
                        VendorDescription={vendor.VendorDescription}
                    />
                ))}
            </div>
        </div>
    )
}

/**
 * @dev The actual display box of each venue that will render
 */
const VendorDisplayBox = ({ _id, VendorName, VendorDescription }) => {
    const descriptionMaxLength = 150
    const nameMaxLength = 20
    return (
        <div className="vendor-item" key={_id}>
            <strong>{VendorName.length > nameMaxLength ? VendorName.slice(0, nameMaxLength) : VendorName}</strong>
            <p>{VendorDescription != null ?? VendorDescription.length > descriptionMaxLength ? VendorDescription.slice(0, descriptionMaxLength) + " ..." : VendorDescription}</p>
        </div>
    )
}

export default VendorAdvertReel;