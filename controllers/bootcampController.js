// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (request, response, next) => {
  response.json({success: true, msg: `Index all bootcamps`});
}

// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamps = (request, response, next) => {
  response.json({success: true, msg: `Show find bootcamps ${request.params.id}`});
}

// @desc    Create new bootcamps
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamps = (request, response, next) => {
  response.json({success: true, msg: `Create bootcamps`});
}

// @desc    Update bootcamps
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamps = (request, response, next) => {
  response.json({success: true, msg: `Update bootcamps ${request.params.id}`});
}

// @desc    Delete bootcamps
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamps = (request, response, next) => {
  response.json({success: true, msg: `Delete find bootcamps ${request.params.id}`});
}