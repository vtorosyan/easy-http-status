window.data = {
	"id" : 1,
	"question" : "Is there a problem with the request?",
	"no" : {
		"id" : 2,
		"question" : "Is there a server-side problem?",
		"no" : {
			"id" : 3,
			"question" : "Am I implementing a web server?",
			"no" : {
				"id" : 4,
				"question" : "Do you want to redirect the user to a new Location?",
				"no" : {
					"id" : 5,
					"question" : "Will the request be completed later?",
					"no" : {
						"id" : 6,
						"question" : "Do you want the user's view to remain unchanged?",
						"no" : {
							"id" : 7,
							"question" : "Does user need to reset content?",
							"no" : {
								"id" : 34,
								"question" : "Are you implementing a web server?",
								"no" : {
									"id" : 36,
									"question" : "Is Multi Status required?",
									"no": {
										"id" : 38,
										"question" : "Has request payload been modified?",
										"no" : {
											"id" : 39,
											"question" : null,
											"no" : null,
											"yes" : null,
											"parentId" : 38,
											"http_status" : {
												"code" : 200,
												"description" : "The request has succeeded.",
												"source" : "https://httpstatuses.com/200"
											}
										},
										"yes" : {
											"id" : 40,
											"question" : null,
											"no" : null,
											"yes" : null,
											"parentId" : 38,
											"http_status" : {
												"code" : 203,
												"description" : "The request was successful but the enclosed payload has been modified from that of the origin server's 200 OK response by a transforming proxy.",
												"source" : "https://httpstatuses.com/203"
											}
										},
										"parentId" : 36,
										"http_status" : null
									},
									"yes": {
										"id" : 41,
										"question" : null,
										"no" : null,
										"yes" : null,
										"parentId" : 36,
										"http_status" : {
											"code" : 207,
											"description" : "A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.",
											"source" : "https://httpstatuses.com/207"
										}
									},
									"parentId" : 34,
									"http_status" : null
								},
								"yes" : {
									"id" : 37,
									"question" : "Is Multi status required?",
									"no": {
										"id" : 42,
										"question" : "Does the client already have the correct representation?",
										"no" : {
											"id" : 43,
											"question" : null,
											"no" : null,
											"yes" : null,
											"parentId" : 42,
											"http_status" : {
												"code" : 206,
												"description" : "The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the request's Range header field.",
												"source" : "https://httpstatuses.com/206"
											}
										},
										"yes" : {
											"id" : 44,
											"question" : null,
											"no" : null,
											"yes" : null,
											"parentId" : 42,
											"http_status" : {
												"code" : 304,
												"description" : "A conditional GET or HEAD request has been received and would have resulted in a 200 OK response if it were not for the fact that the condition evaluated to false.",
												"source" : "https://httpstatuses.com/304"
											}
										},
										"parentId" : 37,
										"http_status" : null
									},
									"yes": {
										"id" : 61,
										"question" : null,
										"no" : null,
										"yes" : null,
										"parentId" : 37,
										"http_status" : {
											"code" : 207,
											"description" : "A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.",
											"source" : "https://httpstatuses.com/207"
										}
									},
									"parentId" : 34,
									"http_status" : null
								},
								"parentId" : 7,
								"http_status" : null
							},
							"yes": {
								"id" : 35,
								"question" : null,
								"no" : null,
								"yes" : null,
								"parentId" : 7,
								"http_status" : {
									"code" : 205,
									"description" : "The server has fulfilled the request and desires that the user agent reset the document view, which caused the request to be sent, to its original state as received from the origin server.",
									"source" : "https://httpstatuses.com/205"
								}
							},
							"parentId" : 6,
							"http_status" : null
						},
						"yes" : {
							"id" : 45,
							"question" : null,
							"no" : null,
							"yes" : null,
							"parentId" : 6,
							"http_status" : {
								"code" : 204,
								"description" : "The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.",
								"source" : "https://httpstatuses.com/204"
							}
						},
						"parentId" : 5,
						"http_status" : null
					},
					"yes" : {
						"id" : 47,
						"question" : null,
						"no" : null,
						"yes" : null,
						"parentId" : 5,
						"http_status" : {
							"code" : 202,
							"description" : "The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.",
							"source" : "https://httpstatuses.com/202"
						}
					},
					"parentId" : 4,
					"http_status" : null
				},
				"yes" : {
					"id" : 48,
					"question" : "Is it the same resource at a new location?",
					"no" : {
						"id" : 49,
						"question" : "Has request been fulfilled and new resource created?"
						"no" : {
							"id" : 50,
							"question" : null,
							"no" : null,
							"yes" : null,
							"parentId" : 49,
							"http_status" : {
								"code" : 303,
								"description" : "The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, which is intended to provide an indirect response to the original request.",
								"source" : "https://httpstatuses.com/303"
							}
						},
						"yes" : {
							"id" : 51,
							"question" : null,
							"no" : null,
							"yes" : null,
							"parentId" : 49,
							"http_status" : {
								"code" : 201,
								"description" : "The request has been fulfilled and has resulted in one or more new resources being created.",
								"source" : "https://httpstatuses.com/201"
							}
						},
						"parentId" : 48,
						"http_status" : null
					},
					"yes" : {
						"id" : 52,
						"question" : "Are there multi choices to represent the resource?",
						"no" : {
							"id" : 54,
							"question" : "Can method change to GET?",
							"no" : {
								"id" : 55,
								"question" : "Is the new location temporary?",
								"no" : {
									"id" : 56,
									"question" : null,
									"no" : null,
									"yes" : null,
									"parentId" : 55,
									"http_status" : {
										"code" : 307,
										"description" : "The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.",
										"source" : "https://httpstatuses.com/307"
									}
								},
								"yes" : {
									"id" : 57,
									"question" : null,
									"no" : null,
									"yes" : null,
									"parentId" : 55,
									"http_status" : {
										"code" : 308,
										"description" : "The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.",
										"source" : "https://httpstatuses.com/308"
									}
								},
								"parentId" : 54,
								"http_status" : null
							},
							"yes" : {
								"id" : 58,
								"question" : "Is the new location temporary?",
								"no" : {
									"id" : 59,
									"question" : null,
									"no" : null,
									"yes" : null,
									"parentId" : 58,
									"http_status" : {
										"code" : 301,
										"description" : "The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.",
										"source" : "https://httpstatuses.com/301"
									}
								},
								"yes" : {
									"id" : 60,
									"question" : null,
									"no" : null,
									"yes" : null,
									"parentId" : 58,
									"http_status" : {
										"code" : 302,
										"description" : "The target resource resides temporarily under a different URI. Since the redirection might be altered on occasion, the client ought to continue to use the effective request URI for future requests.",
										"source" : "https://httpstatuses.com/302"
									}
								},
								"parentId" : 54,
								"http_status" : null
							},
							"parentId" : 52,
							"http_status" : null
						},
						"yes" : {
							"id" : 53,
							"question" : null,
							"yes" : null,
							"no" : null,
							"parentId" : 52,
							"http_status" : {
								"code" : 300,
								"description" : "The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.",
								"source" : "https://httpstatuses.com/300"
							}
						},
						"parentId" : 48,
						"http_status" : null
					},
					"parentId" : 4,
					"http_status" : null
				},
				"parentId" : 3,
				"http_status" : null
			},
			"yes" : {
				"id" : 9,
				"question" : "Should client continue with its request?",
				"no" : {
					"id" : 10,
					"question" : "Do I understand the request and want to comply via the Upgrade header field?",
					"no" : {
						"id" : 11,
						"question" : null,
						"no" : null,
						"yes" : null,
						"parentId" : 10,
						"http_status" : {
							"code" : 102,
							"description" : "An interim response used to inform the client that the server has accepted the complete request, but has not yet completed it.",
							"source" : "https://httpstatuses.com/102"
						}
					},
					"yes" : {
						"id" : 12,
						"question" : null,
						"no" : null,
						"yes" : null,
						"parentId" : 10,
						"http_status" : {
							"code" : 101,
							"description" : "The server understands and is willing to comply with the client's request, via the Upgrade header field1, for a change in the application protocol being used on this connection.",
							"source" : "https://httpstatuses.com/101"
						}
					},
					"parentId" : 9,
					"http_status" : null
				},
				"yes" : {
					"id" : 13,
					"question" : null,
					"no" : null,
					"yes" : null,
					"parentId" : 9,
					"http_status" : {
						"code" : 100,
						"description" : "The initial part of a request has been received and has not yet been rejected by the server. The server intends to send a final response after the request has been fully received and acted upon.",
						"source" : "https://httpstatuses.com/100"
					}
				},
				"parentId" : 3,
				"http_status" : null	
			},
			"parentId" : 2,
			"http_status" : null
		},		
		"yes": {
			"id" : 14,
			"question" : "Should the user retry after some time?",
			"no" : {
				"id" : 15,
				"question" : "Is it a problem with another server?",
				"no" : {
					"id" : 16,
					"question" : "Do you feel bad your code can't handle the request?",
					"no" : {
						"id" : 17,
						"question" : "Are you able to store representation?",
						"no" : {
							"id" : 18,
							"question" : null,
							"no" : null,
							"yes": null,
							"parentId" : 17,
							"http_status" : {
								"code" : 507,
								"description" : "The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.",
								"source" : "https://httpstatuses.com/507"
							}

						},
						"yes" : {
							"id" : 19,
							"question" : "Is there a loop?",
							"no" : {
								"id" : 20,
								"no" : {
									"id" : 21,
									"question" : "Is network authentication required?",
									"no" : {
										"id" : 22,
										"question" : null,
										"no" : null,
										"yes" : null,
										"parentId" : 21,
										"http_status" : {
											"code" : 500,
											"description" : "The server encountered an unexpected condition that prevented it from fulfilling the request.",
											"source" : "https://httpstatuses.com/500"
										}
									},
									"yes" : {
										"id" : 23,
										"question" : null,
										"no" : null,
										"yes" : null,
										"parentId" : 21,
										"http_status" : {
											"code" : 511,
											"description" : "The client needs to authenticate to gain network access.",
											"source" : "https://httpstatuses.com/511"
										}
									}
								}	
							},
							"yes" : {
								"id" : 21,
								"question" : null,
								"no" : null,
								"yes" : null,
								"parentId" : 19,
								"http_status" : {
									"code" : 508,
									"description" : "The server terminated an operation because it encountered an infinite loop while processing a request with Depth: infinity. This status indicates that the entire operation failed.",
									"source" : "https://httpstatuses.com/508"
								}
							},
							"parentId" : 17,
							"http_status" : null
						},
						"parentId" : 16,
						"http_status" : null
					},
					"yes" : {
						"id" : 24,
						"question" : "Do you support specified http version?",
						"no" : {
							"id" : 25,
							"question" : null,
							"no" : null,
							"yes" : null,
							"parentId" : 24,
							"http_status" : {
								"code" : 505,
								"description" : "The server does not support, or refuses to support, the major version of HTTP that was used in the request message.",
								"source" : "https://httpstatuses.com/505"
							}
						},
						"yes" : {
							"id" : 26,
							"question" : null,
							"no" : null,
							"yes" : null,
							"parentId" : 24,
							"http_status" : {
								"code" : 501,
								"description" : "The server does not support the functionality required to fulfill the request.",
								"source" : "https://httpstatuses.com/501"
							}
						},
						"parentId" : 16,
						"http_status" : null
					},
					"parentId" : 15,
					"http_status" : null

				},
				"yes" : {
					"id" : 31,
					"question" : "Is the other server responding?",
					"no" : {
						"id" : 32,
						"question" : null,
						"no" : null,
						"yes" : null,
						"parentId" : 31,
						"http_status" : {
							"code" : 504,
							"description" : "The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.",
							"source" : "https://httpstatuses.com/504"
						}
					},
					"yes" : {
						"id" : 33,
						"question" : null,
						"no" : null,
						"yes" : null,
						"parentId" : 31,
						"http_status" : {
							"code" : 502,
							"description" : "The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.",
							"source" : "https://httpstatuses.com/502"
						}
					},
					"parentId" : 15,
					"http_status" : null
				},
				"parentId" : 14,
				"http_status" : null
			},
			"yes" : {
				"id" : 27,
				"question" : "Is there an internal configuration error?",
				"no" : {
					"id" : 28,
					"question" : "Does the policy meet requirements?",
					"no" : {
						"id" : 29,
						"question" : null,
						"no" : null,
						"yes" : null,
						"parentId" : 28,
						"http_status" : {
							"code" : 510,
							"description" : "The policy for accessing the resource has not been met in the request. The server should send back all the information necessary for the client to issue an extended request.",
							"source" : "https://httpstatuses.com/510"
						}
					},
					"yes" : {
						"id" : 30,
						"question" : null,
						"no" : null,
						"yes" : null,
						"parentId" : 28,
						"http_status" : {
							"code" : 503,
							"description" : "The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.",
							"source" : "https://httpstatuses.com/503"
						}
					},
					"parentId" : 27,
					"http_status" : null
				},
				"yes" : {
					"id" : 30,
					"question" : null,
					"no" : null,
					"yes" : null,
					"parentId" : 27,
					"http_status" : {
							"code" : 500,
							"description" : "The server encountered an unexpected condition that prevented it from fulfilling the request.",
							"source" : "https://httpstatuses.com/500"
						}
				},
				"parentId" : 14,
				"http_status" : null
			},
			"parentId" : 2,
			"http_status" : null
		},
		"parentId" : 1,
		"http_status" : null
	},	
	"yes" : {
		"id" : 62,
		"question" : "Is the user being throttled?",
		"no" : {
			"id" : 64,
			"question" : "Does the user need to authenticate?",
			"no" : {
				"id" : 70,
				"question" : "Does the user have access to the resource?",
				"no" : {
					"id" : 71,
					"question" : "Is the resource secret?",
					"no" : {
						"id" : 72,
						"question" : null,
						"no" : null,
						"yes" : null,
						"parentId" : 71,
						"http_status" : {
							"code" : 403,
							"description" : "The server understood the request but refuses to authorize it.",
							"source" : "https://httpstatuses.com/403"
						}
					},
					"yes" : {
						"id" : 73,
						"question" : null,
						"no" : null,
						"yes" : null,
						"parentId" : 71,
						"http_status" : {
							"code" : 404,
							"description" : "The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.",
							"source" : "https://httpstatuses.com/404"
						}
					},
					"parentId" : 70,
					"http_status" : null
				},
				"yes" : {
					"id" : 74,
					"question" : "Does the resource even exist?",
					"no" : {
						"id" : 75,
						"question" : "Are you rage-quitting the internet?",
						"no" : {
							"id" : 76,
							"question" : null,
							"no" : null,
							"yes" : null,
							"parentId" : 75,
							"http_status" : {
								"code" : 404,
								"description" : "The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.",
								"source" : "https://httpstatuses.com/404"
							}
						},
						"yes" : {
							"id" : 77,
							"question" : null,
							"no" : null,
							"yes" : null,
							"parentId" : 75,
							"http_status" : {
								"code" : 410,
								"description" : "The target resource is no longer available at the origin server and that this condition is likely to be permanent.",
								"source" : "https://httpstatuses.com/410"
							}
						},
						"parentId" : 74,
						"http_status" : null
					},
					"yes" : {
						"id" : 78,
						"question" : "Is the HTTP method handeled by the resource?",
						"no" : {
							"id" : 79,
							"question" : null,
							"no" : null,
							"yes" : null,
							"parentId" : 78,
							"http_status" : {
								"code" : 405,
								"description" : "The method received in the request-line is known by the origin server but not supported by the target resource.",
								"source" : "https://httpstatuses.com/405"
							}
						},
						"yes" : {
							"id" : 80,
							"question" : "Is there a problem with the headers?",
							"no" : {
								"id" : 81,
								"question" : "Is the request incompatible with a previous request?",
								"no" : {
									"id" : 83,
									"question" : "Is the body well-formed and yet still invalid?",
									"no" : {
										"id" : 85,
										"question" : "Are you trying to brew a cofee with a teapot?",
										"no" : {
											"id" : 87,
											"question" : "Are you implementing web server?",
											"no" : {
												"id" : 88,
												"no" : null,
												"yes" : null,
												"question" : null,
												"parentId" : 87,
												"http_status" : {
													"code" : 400,
													"description" : "The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).",
													"source" : "https://httpstatuses.com/400"
												}
											},
											"yes" : {
												"id" : 89,
												"question" : "Is there a Request timeout?",
												"no" : {
													"id" : 91,
													"question" : "Is the Payload too large?",
													"no" : {
														"id" : 93,
														"question" : "Is the URI too long?",
														"no" : {
															"id" : 95,
															"question" : "Is the Range not satisfiable?",
															"no" : {
																"id" : 97,
																"question" : "Is Upgrade required?",
																"no" : {
																	"id" : 98,
																	"question" : null,
																	"no" : null,
																	"yes" : null,
																	"parentId" : 97,
																	"http_status" : {
																		"code" : 400,
																		"description" : "The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).",
																		"source" : "https://httpstatuses.com/400"
																	}		
																},
																"yes" : {
																	"id" : 99,
																	"question" : null,
																	"no" : null,
																	"yes" : null,
																	"parentId" : 97,
																	"http_status" : {
																		"code" : 426,
																		"description" : "The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.",
																		"source" : "https://httpstatuses.com/426"
																	}
																},
																"parentId" : 95,
																"http_status" : null
															},
															"yes" : {
																"id" : 96,
																"question" : null,
																"no" : null,
																"yes" : null,
																"parentId" : 94,
																"http_status" : {
																	"code" : 416,
																	"description" : "None of the ranges in the request's Range header field1 overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.",
																	"source" : "https://httpstatuses.com/416"
																}	
															},
															"parentId" : 93,
															"http_status" : null
														},
														"yes" : {
															"id" : 94,
															"question" : null,
															"no" : null,
															"yes" : null,
															"parentId" : 93,
															"http_status" : {
																"code" : 414,
																"description" : "The server is refusing to service the request because the request-target1 is longer than the server is willing to interpret.",
																"source" : "https://httpstatuses.com/414"
															}
														},
														"parentId" : 91,
														"http_status" : null
													},
													"yes" : {
														"id" : 92,
														"question" : null,
														"no" : null,
														"yes" : null,
														"parentId" : 91,
														"http_status" : {
															"code" : 413,
															"description" : "The server is refusing to process a request because the request payload is larger than the server is willing or able to process.",
															"source" : "https://httpstatuses.com/413"
														}	
													},
													"parentId" : 89,
													"http_status" : null
												},
												"yes" : {
													"id" : 90,
													"question" : null,
													"no" : null,
													"yes" : null,
													"parentId" : 89,
													"http_status" : {
														"code" : 408,
														"description" : "The server did not receive a complete request message within the time that it was prepared to wait.",
														"source" : "https://httpstatuses.com/408"
													}
												},
												"parentId" : 87,
												"http_status" : null
											},
											"parentId" : 85,
											"http_status" : null
										},
										"yes" : {
											"id" : 86,
											"question" : null,
											"no" : null,
											"yes" : null,
											"parentId" : 85,
											"http_status" : {
												"code" : 418,
												"description" : "Any attempt to brew coffee with a teapot should result in the error code 418 I'm a teapot. The resulting entity body MAY be short and stout.",
												"source" : "https://httpstatuses.com/418"
											}
										},
										"parentId" : 83,
										"http_status" : null
									},
									"yes" : {
										"id" : 84,
										"question" : null,
										"no" : null,
										"yes" : null,
										"parentId" : 83,
										"http_status" : {
											"code" : 422,
											"description" : "The server understands the content type of the request entity (hence a 415 Unsupported Media Type status code is inappropriate), and the syntax of the request entity is correct (thus a 400 Bad Request status code is inappropriate) but was unable to process the contained instructions.",
											"source" : "https://httpstatuses.com/422"
										}
									},
									"parentId" : 81,
									"http_status" : null
								},
								"yes" : {
									"id" : 82,
									"question" : null,
									"no" : null,
									"yes" : null,
									"parentId" : 81,
									"http_status" : {
										"code" : 409,
										"description" : "The request could not be completed due to a conflict with the current state of the target resource. This code is used in situations where the user might be able to resolve the conflict and resubmit the request.",
										"source" : "https://httpstatuses.com/409"
									}
								},
								"parentId" : 80,
								"http_status" : null
							},
							"yes" : {
								"id" : 100,
								"question" : "Is the Accept header missing?",
								"no" : {
									"id" : 102,
									"question" : "Is the Content-length header missing?",
									"no" : {
										"id" : 104,
										"question" : "Is the Precondition failed?",
										"no" : {
											"id" : 106,
											"question" : "Is the content-type missing or incorrect?",
											"no" : {
												"id" : 108,
												"question" : "Has Expectation failed?",
												"no" : {
													"id" : 110,
													"question" : null,
													"no" : null,
													"yes" : null,
													"parentId" : 108,
													"http_status" : {
														"code" : 400,
														"description" : "The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).",
														"source" : "https://httpstatuses.com/400"
													}
												},
												"yes" : {
													"id" : 109,
													"question" : null,
													"no" : null,
													"yes" : null,
													"parentId" : 108,
													"http_status" : {
														"code" : 417,
														"description" : "The expectation given in the request's Expect header field could not be met by at least one of the inbound servers.",
														"source" : "https://httpstatuses.com/417"
													}
												},
												"parentId" : 106,
												"http_status" : null
											},
											"yes" : {
												"id" : 107,
												"question" : null,
												"no" : null,
												"yes" : null,
												"parentId" : 106,
												"http_status" : {
													"code" : 415,
													"description" : "The origin server is refusing to service the request because the payload is in a format not supported by this method on the target resource.",
													"source" : "https://httpstatuses.com/415"
												}
											},
											"parentId" : 104,
											"http_status" : null
										},
										"yes" : {
											"id" : 105,
											"question" : null,
											"no" : null,
											"yes" : null,
											"parentId" : 104,
											"http_status" : {
												"code" : 412,
												"description" : "One or more conditions given in the request header fields evaluated to false when tested on the server.",
												"source" : "https://httpstatuses.com/412"
											}
										},
										"parentId" : 102,
										"http_status" : null
									},
									"yes" : {
										"id" : 103,
										"question" : null,
										"no" : null,
										"yes" : null,
										"parentId" : 102,
										"http_status" : {
											"code" : 411,
											"description" : "The server refuses to accept the request without a defined Content-Length.",
											"source" : "https://httpstatuses.com/411"
										}	
									},
									"parentId" : 100,
									"http_status" : null
								},
								"yes" : {
									"id" : 101,
									"question" : null,
									"no" : null,
									"yes" : null,
									"parentId" : 100,
									"http_status" : {
										"code" : 406,
										"description" : "The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.",
										"source" : "https://httpstatuses.com/406"
									}
								},
								"parentId" : 80,
								"http_status" : null
							},
							"parentId" : 78,
							"http_status" : null
						},
						"parentId" : 74,
						"http_status" : null
					},
					"parentId" : 70,
					"http_status" : null
				},
				"parentId" : 64,
				"http_status" : null
			},
			"yes" : {
				"id" : 65,
				"question" : "Are you using HTTP auth?",
				"no" : {
					"id" : 67,
					"question" : "Is the resource secret?",
					"no" : {
						"id" : 68,
						"question" : null,
						"no" : null,
						"yes" : null,
						"parentId" : 67,
						"http_status" : {
							"code" : 403,
							"description" : "The server understood the request but refuses to authorize it.",
							"source" : "https://httpstatuses.com/403"
						}
					},
					"yes" : {
						"id" : 69,
						"question" : null,
						"no" : null,
						"yes" : null,
						"parentId" : 67,
						"http_status" : {
							"code" : 404,
							"description" : "The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.",
							"source" : "https://httpstatuses.com/404"
						}
					},
					"parentId" : 65,
					"http_status" : null
				},
				"yes" : {
					"id" : 66,
					"question" : null,
					"no" : null,
					"yes" : null,
					"parentId" : 65,
					"http_status" : {
						"code" : 401,
						"description" : "The request has not been applied because it lacks valid authentication credentials for the target resource.",
						"source" : "https://httpstatuses.com/401"
					}
				}
			},
			"parentId" : 62,
			"http_status" : null
		},
		"yes": {
			"id" : 63,
			"question" : null,
			"no" : null,
			"yes" : null,
			"parentId" : 62,
			"http_status" : {
				"code" : 429,
				"description" : "The user has sent too many requests in a given amount of time (rate limiting).",
				"source" : "https://httpstatuses.com/429"
			}
		},
		"parentId" : 1,
		"http_status" : null
	},
	"parentId" : null,
	"http_status" : null
};
