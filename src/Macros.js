const constants = {
    backend_server_ip: 'http://localhost:8000',
    metricFilterOptions: ["largest_contentful_paint",
    "cumulative_layout_shift",
    "experimental_time_to_first_byte",
    "first_contentful_paint",
    "first_input_delay",
    "interaction_to_next_paint"],
    thresholdFilterOptions: ["None", "Pass", "Fail"]
}

export default constants;