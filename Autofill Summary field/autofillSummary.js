AJS.$('#summary').parent().hide()

var fillSummary = function () {
    var value1 = AJS.$('#customfield_14494').val()
    var value2 = AJS.$('#customfield_12216').val()
    AJS.$('#summary').val(value1 + " " + value2)
}

AJS.$('#customfield_14494').change(fillSummary)
AJS.$('#customfield_12216').change(fillSummary)